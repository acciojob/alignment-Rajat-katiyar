//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Assignment 3</title>
    <style>
        /* General table styling */
        table {
            border: 1px solid black;
            border-spacing: 1px;
            padding: 1px;
        }
        th, td {
            border: 1px solid black;
            padding: 1px;
        }
        .center {
            text-align: center;
        }
        .right {
            text-align: right;
        }
        .green {
            background-color: green;
        }
        .blue {
            background-color: blue;
        }
        .middle {
            margin: 0 auto;
        }
        /* Center-align the heading */
        h1 {
            text-align: center;
        }
    </style>
</head>
<body>

    <!-- Center-aligned Heading -->
    <h1>HTML Assignment #3</h1>

    <!-- Table 1 -->
    <table id="table-1" class="middle">
        <tr>
            <td id="t11">Cell 1</td>
            <td id="t12">Cell 2</td>
            <td id="t13" class="right">Cell 3</td>
        </tr>
        <tr class="center">
            <td>Cell 4</td>
            <td>Cell 5</td>
            <td class="right">Cell 6</td>
        </tr>
        <tr>
            <td>Cell 7</td>
            <td>Cell 8</td>
            <td class="right">Cell 9</td>
        </tr>
    </table>

    <br> <!-- Space between tables -->

    <!-- Table 2 -->
    <table id="table-2" class="middle">
        <tr>
            <td id="t21" colspan="6">Header Row (Spans 6 Columns)</td>
        </tr>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
            <td>Cell 6</td>
        </tr>
        <tr>
            <td>Cell 7</td>
            <td>Cell 8</td>
            <td>Cell 9</td>
            <td>Cell 10</td>
            <td>Cell 11</td>
            <td>Cell 12</td>
        </tr>
        <tr>
            <td>Cell 13</td>
            <td>Cell 14</td>
            <td>Cell 15</td>
            <td>Cell 16</td>
            <td>Cell 17</td>
            <td>Cell 18</td>
        </tr>
        <tr>
            <td>Cell 19</td>
            <td>Cell 20</td>
            <td>Cell 21</td>
            <td>Cell 22</td>
            <td>Cell 23</td>
            <td>Cell 24</td>
        </tr>
        <tr>
            <td>Cell 25</td>
            <td>Cell 26</td>
            <td>Cell 27</td>
            <td>Cell 28</td>
            <td>Cell 29</td>
            <td>Cell 30</td>
        </tr>
    </table>

    <br> <!-- Space between tables -->

    <!-- Table 3 -->
    <table id="table-3" class="middle">
        <tr class="green">
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
        <tr>
            <td>Cell 4</td>
            <td id="t-image"><img src="https://via.placeholder.com/100" alt="Placeholder Image"></td>
            <td>Cell 6</td>
        </tr>
        <tr class="blue">
            <td>Cell 7</td>
            <td>Cell 8</td>
            <td>Cell 9</td>
        </tr>
    </table>

</body>
</html>
