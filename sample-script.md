# Sample PowerShell Script Documentation

<link id="theme-style" rel="stylesheet" href="assets/theme-light.css">
<script src="theme-switcher.js"></script>

This page documents a sample PowerShell script.

## Script: `Get-HelloWorld.ps1`

```powershell
function Get-HelloWorld {
    [CmdletBinding()]
    param(
        [string]$Name = "World"
    )
    "Hello, $Name!"
}
```

### Usage

```powershell
PS> Get-HelloWorld -Name "Greybeard"
Hello, Greybeard!
```

### Description
This function prints a hello message. You can customize the name parameter.
