---
title: New-UDTableDetail
parent: PSU App Helpers
# nav_order: 1
---

# New-UDTableDetail
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## New-UDTableDetail

---

### Description

`New-UDTableDetail` creates a detailed table display with customizable title styling for Universal Dashboard. The function creates a formatted table display with a title that can be styled as either a simple typography element or as an alert. The table uses custom CSS styling to create a compact, detail-oriented view with minimal padding and hidden headers.

---

### Parameters

| Name         | Type         | Description                                                                                      |
|--------------|--------------|--------------------------------------------------------------------------------------------------|
| Title        | String       | The title text to display above the table.                                                      |
| UDTable      | Hashtable    | A hashtable containing the Universal Dashboard table object to be displayed.                     |
| TitleVariant | String       | Specifies the styling variant for the title. Valid values: "Simple", "Alert". Default: "Simple" |
| AlertVariant | String       | Controls the alert's visual style when TitleVariant is "Alert". Valid values: "Info", "Success", "Warning", "Error". Default: "Info" |

---

### Usage

```powershell
$myTable = New-UDTable -Data @(
      [PSCustomObject]@{Property = "Name";     Value = "John Doe"}
      [PSCustomObject]@{Property = "Address";  Value = "123 Main St"}
      [PSCustomObject]@{Property = "City, ST"; Value = "Anytown, USA"}
      [PSCustomObject]@{Property = "Phone";    Value = "123-456-7890"}
) -Columns @(
      New-UDTableColumn -Property Property -Title "Property" -Width 200
      New-UDTableColumn -Property Value -Title "Value" -Width 300
)
New-UDTableDetail -Title "User Information" -UDTable $table -TitleVariant "Simple"
```

```powershell
# Create responsive grid layout with both styling variants
New-UDGrid -Container -Spacing 3 -Children {
      # Left column: Simple title variant
      New-UDGrid -Item -LargeSize 6 -SmallSize 12 -Children {
            New-UDTableDetail -Title "User Details" -UDTable $myTable -TitleVariant "Simple"
      }
      # Right column: Alert title variant
      New-UDGrid -Item -LargeSize 6 -SmallSize 12 -Children {
            New-UDTableDetail -Title "User Details" -UDTable $myTable -TitleVariant "Alert"
      }
}
```

---

### Implementation

```powershell
function New-UDTableDetail {
    <#
    .SYNOPSIS
    Creates a detailed table display with customizable title styling for Universal Dashboard.

    .DESCRIPTION
    The New-UDTableDetail function creates a formatted table display with a title that can be
    styled as either a simple typography element or as an alert. The table uses custom CSS
    styling to create a compact, detail-oriented view with minimal padding and hidden headers.

    .PARAMETER Title
    The title text to display above the table.

    .PARAMETER UDTable
    A hashtable containing the Universal Dashboard table object to be displayed.

    .PARAMETER TitleVariant
    Specifies the styling variant for the title. Valid values are:
    - "Simple": Displays the title as plain typography with h6 variant
    - "Alert": Displays the title within an alert component

    .PARAMETER AlertVariant
    When TitleVariant is set to "Alert", this parameter controls the alert's visual style.
    Valid values are:
    - "Info": Blue informational alert (default)
    - "Success": Green success alert
    - "Warning": Orange warning alert
    - "Error": Red error alert

    .EXAMPLE
    $table = New-UDTable -Data $data -Columns $columns
    New-UDTableDetail -Title "User Information" -UDTable $table -TitleVariant "Simple"

    Creates a table detail view with a simple title.

    .EXAMPLE
    New-UDTableDetail -Title "Critical Data" -UDTable $table -TitleVariant "Alert" -AlertVariant "Warning"

    Creates a table detail view with an orange warning alert as the title.

    .NOTES
    This function applies custom CSS styling to:
    - Hide table headers (.MuiTableRow-head)
    - Minimize cell padding for a compact appearance
    - Hide SVG icons in alert components

    The function is designed to work with Universal Dashboard components.
    #>
    param(
        [string]$Title,
        [hashtable]$UDTable,
        [ValidateSet("Simple", "Alert")]
        $TitleVariant = "Simple",
        [ValidateSet("Info", "Success", "Warning", "Error")]
        $AlertVariant = "Info"
    )

    # Display title based on selected variant
    if ($TitleVariant -eq "Simple") {
        New-UDTypography -Text $Title -Variant h6
    }

    if ($TitleVariant -eq "Alert") {
        # Custom CSS to hide SVG icons in alerts for cleaner appearance
        New-UDStyle -Style @'
svg {
    display: none;
}
'@ -Content {
            New-UDAlert -Dense -Severity $AlertVariant -Children {
                New-UDTypography -Text $Title -Variant h6
            }
        }
    }

    # Custom CSS for super-dense table styling
    # - Hides table headers for detail view
    # - Minimizes cell padding for compact appearance
    $superdense = @'
.MuiTableRow-head{
    display: none;
}
td {
    padding-top:1px;
    padding-bottom:1px;
}
'@
    # Apply the super-dense styling to the table
    New-UDStyle -Style $superdense -Content {
        $UDTable
    }
}
```