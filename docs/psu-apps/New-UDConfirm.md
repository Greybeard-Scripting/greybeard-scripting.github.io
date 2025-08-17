---
title: New-UDConfirm
parent: PSU App Helpers
# nav_order: 2
---

# New-UDConfirm
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## New-UDConfirm

**Module:** PowerShellUniversal.Apps.Tools  
**Source:** [PowerShellUniversal.Apps.Tools.psm1](https://github.com/ironmansoftware/gallery/blob/b7e579ff12793dba880c06cab0df059f5fe6b43b/Apps/PowerShellUniversal.Apps.Tools/PowerShellUniversal.Apps.Tools.psm1#L53)

---

### Description

`New-UDConfirm` creates a confirmation dialog in Universal Dashboard. It displays a modal dialog with customizable text and provides "Yes" and "No" buttons for the user to confirm or cancel the action. Returns `$true` if the user clicks "Yes" and `$false` if the user clicks "No".

---

### Parameters

| Name | Type   | Description                                      |
|------|--------|--------------------------------------------------|
| Text | string | The text to display in the confirmation dialog.  |

---

### Usage

```powershell
if (New-UDConfirm -Text "Do you want to delete this item?") {
    # Delete the item
}
```

---

### Implementation

```powershell
function New-UDConfirm {
    <#
    .SYNOPSIS
    Creates a confirmation dialog in Universal Dashboard.

    .DESCRIPTION
    The New-UDConfirm function creates a confirmation dialog in Universal Dashboard. It displays a modal dialog with a specified text and provides "Yes" and "No" buttons for the user to confirm or cancel the action.

    .PARAMETER Text
    Specifies the text to be displayed in the confirmation dialog. The default value is "Are you sure?".

    .EXAMPLE
    if (New-UDConfirm -Text "Do you want to delete this item?") {
        # Delete the item
    }

    .OUTPUTS
    System.Boolean
    Returns $true if the user clicks "Yes" and $false if the user clicks "No".
    #>
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $false,
            ValueFromPipeline = $true,
            ValueFromPipelineByPropertyName = $true)]
        [string]$Text = 'Are you sure?'
    )
    $Page:Result = $null
    Show-UDModal -Content {
        New-UDTypography -Text $Text
    } -Footer {
        New-UDButton -Text "Yes" -OnClick {
            $Page:Result = $true
            Hide-UDModal
        } -Style @{"border-radius" = "4px" }

        New-UDButton -Text "No" -OnClick {
            $Page:Result = $false
            Hide-UDModal
        } -Style @{"border-radius" = "4px" }
    } -Persistent
    while ($null -eq $Page:Result) {
        Start-Sleep -Milliseconds 100
    }
    return $Page:Result
}
```