---
title: Show-UDObject
parent: PSU App Helpers
# nav_order: 1
---

# Show-UDObject
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---




## Show-UDObject

**Module:** PowerShellUniversal.Apps.Tools  
**Source:** [PowerShellUniversal.Apps.Tools.psm1](https://github.com/ironmansoftware/gallery/blob/b7e579ff12793dba880c06cab0df059f5fe6b43b/Apps/PowerShellUniversal.Apps.Tools/PowerShellUniversal.Apps.Tools.psm1#L191)

---

### Description

`Show-UDObject` displays an object in a modal dialog with syntax highlighting and a copy button. It takes an input object and an optional depth parameter to control how deeply the object's properties are displayed as JSON.

---

### Parameters

| Name        | Type | Description                                                      |
|-------------|------|------------------------------------------------------------------|
| InputObject | any  | The object to display in the modal dialog.                       |
| Depth       | int  | The maximum depth of properties to display (default: 20).        |

---

### Usage

```powershell
$myObject = Get-MyObject
Show-UDObject -InputObject $myObject -Depth 10
```

---

### Implementation

```powershell
function Show-UDObject {
    <#
    .SYNOPSIS
    Displays an object in a modal dialog with syntax highlighting and copy functionality.

    .DESCRIPTION
    The Show-UDObject function displays an object in a modal dialog with syntax highlighting and copy functionality. It takes an input object and optional depth parameter to control the depth of the object's properties that will be displayed.

    .PARAMETER InputObject
    The input object to be displayed in the modal dialog.

    .PARAMETER Depth
    The maximum depth of the object's properties that will be displayed. Default value is 20.

    .EXAMPLE
    $myObject = Get-MyObject
    Show-UDObject -InputObject $myObject -Depth 10

    This example retrieves an object using the Get-MyObject function and displays it in a modal dialog with a maximum depth of 10.
    #>
    param(
        [Parameter(ValueFromPipeline, Mandatory)]
        $InputObject,
        $depth = 20
    )

    process {
        Show-UDModal -Header {
            New-UDTypography -Text $($inputObject.gettype()) -Variant h4
        } -Content {
            New-UDDynamic -LoadingComponent { New-UDProgress } -Content {
                New-UDSyntaxHighlighter -Code (ConvertTo-Json -InputObject $inputObject -Depth $depth) -Language json
            }
            New-UDButton -Text "Copy" -Icon Copy -OnClick { Set-UDClipboard -Data (ConvertTo-Json -InputObject $inputObject -Depth $depth) }
        }
    }
}
```