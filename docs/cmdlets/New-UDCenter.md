---
title: New-UDCenter
parent: cmdlets
# nav_order: 2
---

# New-UDCenter
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## New-UDCenter

**Module:** PowerShellUniversal.Apps.Tools  
**Source:** [PowerShellUniversal.Apps.Tools.psm1](https://github.com/ironmansoftware/gallery/blob/b7e579ff12793dba880c06cab0df059f5fe6b43b/Apps/PowerShellUniversal.Apps.Tools/PowerShellUniversal.Apps.Tools.psm1#L1)

---

### Description

`New-UDCenter` is a helper function to center items horizontally within a Universal Dashboard. It wraps content in a div with centered alignment and full width.

---

### Parameters

| Name    | Type         | Description           |
|---------|--------------|-----------------------|
| Content | ScriptBlock  | The items to center.  |

---

### Usage

```powershell
New-UDCenter -Content {
    New-UDTypography -Text 'Loading groups' -Variant h5
    New-UDProgress -Circular
}
```

---

### Implementation

```powershell
function New-UDCenter {
    <#
    .SYNOPSIS
    Center items within a dashboard.

    .DESCRIPTION
    Center items within a dashboard.

    .PARAMETER Content
    The items to center.

    .EXAMPLE
    New-UDCenter -Content {
        New-UDTypography -Text 'Loading groups' -Variant h5
        New-UDProgress -Circular
    }
    #>
    param([ScriptBlock]$Content)

    New-UDElement -tag div -Content $Content -Attributes @{
        style = @{
            textAlign = 'center'
            width     = '100%'
        }
    }
}
```