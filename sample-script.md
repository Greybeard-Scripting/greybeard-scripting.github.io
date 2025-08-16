# Sample PowerShell Script Documentation

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
