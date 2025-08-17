---
title: Reset-UDPage
parent: cmdlets
# nav_order: 1
---

# Reset-UDPage
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---



## Reset-UDPage

**Module:** PowerShellUniversal.Apps.Tools  
**Source:** [PowerShellUniversal.Apps.Tools.psm1](https://github.com/ironmansoftware/gallery/blob/b7e579ff12793dba880c06cab0df059f5fe6b43b/Apps/PowerShellUniversal.Apps.Tools/PowerShellUniversal.Apps.Tools.psm1#L180)

---

### Description

`Reset-UDPage` reloads the current page in Universal Dashboard. It uses JavaScript to perform a full page reload.

---

### Parameters

This function does not accept any parameters.

---

### Usage

```powershell
Reset-UDPage
```

---

### Implementation

```powershell
function Reset-UDPage {
    <#
    .SYNOPSIS
    Reloads the current page.

    .DESCRIPTION
    Reloads the current page. This uses JavaScript directly.
    #>
    Invoke-UDJavaScript "window.location.reload()"
}
```