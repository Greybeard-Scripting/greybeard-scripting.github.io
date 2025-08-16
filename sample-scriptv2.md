# Sample PowerShell Script Documentation v2

This page documents a sample PowerShell script.

## Script: `Get-HelloWorld2.ps1`

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
