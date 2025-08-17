---
title: New-UDRight
parent: Components
# nav_order: 1
---

# New-UDRight
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## New-UDRight

**Module:** PowerShellUniversal.Apps.Tools  
**Source:** [PowerShellUniversal.Apps.Tools.psm1](https://github.com/ironmansoftware/gallery/blob/b7e579ff12793dba880c06cab0df059f5fe6b43b/Apps/PowerShellUniversal.Apps.Tools/PowerShellUniversal.Apps.Tools.psm1#L28)

---

### Description

`New-UDRight` is a helper function to align items to the right within a Universal Dashboard. It wraps content in a div with flexbox styling to right-align its children.

---

### Parameters

| Name    | Type         | Description                 |
|---------|--------------|-----------------------------|
| Content | ScriptBlock  | The content to right-align. |

---

### Usage

```powershell
New-UDRight -Content {
    New-UDButton -Text 'Save' -OnClick { Show-UDToast -Message 'Saved!' }
}
```

---

### Implementation

```powershell
function New-UDRight {
    <#
    .SYNOPSIS
    Pull items to the right

    .DESCRIPTION
    Pull items to the right within a dashboard.

    .PARAMETER Content
    The content to move to the right.

    .EXAMPLE
    New-UDRight -Content {
        New-UDButton -Text 'Save' -OnClick { Show-UDToast -Message 'Saved!' }
    }
    #>
    [CmdletBinding()]
    param([ScriptBlock]$Content)

    New-UDElement -Tag 'div' -Content $Content -Attributes @{
        style = @{
            "display"         = "flex"
            "justify-content" = "flex-end"
            "margin-left"     = "auto"
            "margin-right"    = "0"
            "align-items"     = "flex-end"
        }
    }
}
```