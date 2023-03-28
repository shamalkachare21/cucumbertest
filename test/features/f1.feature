Feature: GreetingTable
    Scenario: User List
    Given the below users exists in the system '<firstName>' '<lastName>' '<Account>'
    When get users data request with account 'Autodesk' has been sent
    Then list of users is return "2" records
    Examples:
      | firstName | lastName  | Account   |
      | Shamal    | K         | Autodesk  |
      | Moses     | M         | Autodesk  |
      | Tom       | T         | XYZ       |