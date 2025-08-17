---
title: Output ArrayList
parent: PowerShell Tips and Tricks
nav_order: 2
---


# Returning an ArrayList from a PowerShell Function
{: .no_toc }

## Problem

When you return a `[System.Collections.ArrayList]` from a PowerShell function, you might expect to get an ArrayList back. However, PowerShell often unwraps the collection, and the output becomes an `Object[]` (array of objects) instead of the original `ArrayList` type.

---

## Example: The Problem

```powershell
function Get-MyArrayList {
    $arrayList = [System.Collections.ArrayList]::new()
    $arrayList.Add("Item1") | Out-Null
    $arrayList.Add("Item2") | Out-Null
    $arrayList.Add("Item3") | Out-Null
    Write-Host "ArrayList Type: $($arrayList.GetType())"
    return $arrayList
}

$list = Get-MyArrayList
Write-Host "Output Array List Type: $($list.GetType())"
```

**Output:**

```
ArrayList Type: System.Collections.ArrayList
Output Array List Type: System.Object[]
```

Notice that the output type is not what we returned.

---

## Solution: Use the Comma Operator

To force PowerShell to return the `ArrayList` as a single object, use the comma operator (`,`) before the variable in your return statement:

```powershell
function Get-MyArrayList {
    $arrayList = [System.Collections.ArrayList]::new()
    $arrayList.Add("Item1") | Out-Null
    $arrayList.Add("Item2") | Out-Null
    $arrayList.Add("Item3") | Out-Null
    Write-Host "ArrayList Type: $($arrayList.GetType())"
    return ,$arrayList
}

# Usage
$list = Get-MyArrayList
Write-Host "Output Array List Type: $($list.GetType())"
```

**Output:**

```
ArrayList Type: System.Collections.ArrayList
Output Array List Type: System.Collections.ArrayList
```

---

## Why Does This Happen?

PowerShell "unwraps" collections returned from functions, treating each item as a separate output object. The comma operator tells PowerShell to treat the entire collection as a single object, preserving its type.

---

## Summary

If you want your function to return an `ArrayList` (or any collection) as a single object, use `return ,$arrayList` instead of `return $arrayList`.
