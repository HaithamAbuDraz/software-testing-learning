Feature: Is Positive Number

  Scenario: 5 is positive number
    Given number 5
    When i ask if number 5 is positive
    Then i should receive 1

  Scenario: -2 is negative number
    Given number -2
    When i ask if number -2 is positive
    Then i should receive 0
