# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Database schema changes

*Description*: Modify the database schema to add a new column for the custom id and update the Foreign Key relationships between Agents and Facilities tables to accommodate the new column.
*Acceptance Criteria*:
The database schema is updated with a new column for the custom id in the Agents table.
The Agents table has a new Foreign Key to the Facilities table to store the Facility id that provides the custom id.
*Estimated Time/Effort*: 3 hours
*Implementation Details*:
Add a new column to the Agents table to store the custom id value.
Modify the Foreign Key relationships between the Agents table and the Facilities table to include the Facility id that provides the custom id.

### Ticket 2: API Changes

*Description*: Implement the necessary API changes to allow Facilities to set and retrieve custom ids for Agents.
*Acceptance Criteria*:
Facilities can set and retrieve the custom ids for Agents via the API.
The API supports listing, adding, updating, and deleting custom ids.
*Estimated Time/Effort*: 5 hours
*Implementation Details*:
Create an API endpoint to allow Facilities to retrieve a list of Agents with their custom ids.
Create an API endpoint to allow Facilities to set the custom id for an Agent.
Create an API endpoint to allow Facilities to update the custom id for an Agent.
Create an API endpoint to allow Facilities to delete the custom id for an Agent.

### Ticket 3: Update the report generation function

*Description*: Modify the report generation function to use the custom id value when generating reports for Facilities.
*Acceptance Criteria*:
The report generation function is updated to use the custom id value when generating reports for Facilities.
The report displays the custom id value for each Agent assigned to a Shift.
*Estimated Time/Effort*: 3 hours
*Implementation Details*:
Modify the report generation function to retrieve and use the custom id value for each Agent assigned to a Shift.
Update the report generation function to handle cases where a custom id value has not been set.

### Ticket 4: Update getShiftsByFacility and generateReport functions

*Description*: Modify the getShiftsByFacility and generateReport functions to use the custom id value instead of the internal database id.
*Acceptance Criteria*:
The getShiftsByFacility function is updated to retrieve the custom id value for each Agent assigned to a Shift.
The generateReport function is updated to use the custom id value when generating reports for Facilities.
*Estimated Time/Effort*: 5 hours
*Implementation Details*:
Modify the getShiftsByFacility function to retrieve the custom id value for each Agent assigned to a Shift by joining with the Agents table on the new custom id column.
Update the generateReport function to use the custom id value instead of the internal database id when generating reports for Facilities.
Handle cases where a custom id value has not been set for an Agent.

