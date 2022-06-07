## Web Apps For Engineers - Phase 2 testing.

The GitHub Project Board for this work can be found [here]( https://github.com/webappsforengineers/wa4e-v2/projects/3).


### Project Goals:
Following the work from phase one which was broadly about modernization and standardisation phase two had the following
goals:
1. Review the codebase to find the most effective development pathway to increasing the TRL.
2. Add input validation to the website to prevent users from submitting erroneous values.
3. Add a batch testing framework to ensure consistent results during subsequent updates.
4. Develop a process of automation to run the testing.
5. Finish the translation of an additional app from Matlab to JS.
6. Refactor the mathematics library to reduce code reuse and improve the ability to test at a functional level.


### Initial scoping:
The codebase review was substantial and documented [here](https://docs.google.com/document/d/1C1ZIN65May3V4FQbtRo0SppmPitoDAzwgVxG8RKO_-g/edit?usp=sharing).
In summary during the initial development many features were implemented in a self similar way and could be reduced in 
complexity by refactoring the app-tiles to make use of modular components. The mathematics however had not been 
reimplemented in phase one and in general would need a much larger intervention. The review focused on finding 
similarity in the codebase and documenting the functions that are reused. However, the scope of the refactoring exceeded
the available time and thus focus was put on creating a robust testing library so refactoring of the mathematics could 
be guaranteed not to change the results.


### Frontend Refactoring
Following the review and subsequent triage the frontend underwent a major overhaul substantial changes were made to the
way form tiles and in-particular input fields were implemented reducing the code used by up to a factor of three. In 
addition, the configuration files used to generate the apps were modified to be nearly purely object based removing 
positional elements in almost all cases. By removing positional elements we are able to make the body of code far more 
human-readable. A simplified example setting a fields value and bounds: 

This:
> <input  
> .value="${args[0]}"  
> min="${args[1]}"  
> max="${args[2]}" 
> />

Becomes:
> <input  
> .value="${args.value}"  
> min="${args.lowerBound}"  
> max="${args.upperBound}"   
> />

As seen in the above the bootstrap input validation is also added to the apps to ensure that the user is prompted to 
provide only correct values and is visually notified to erroneous values. Furthermore, with the bound value included in 
the config files as opposed to the html the ability to do input validation is provided to both the UI and the 
calculations.

### App development, Sliding Plet
The app 'sliding plet' was translated from MatLab to JS. This required a reimplementation mathematics functions native
to matlab but not to JS, notably a function minimiser and lin and log space. These functions were checked against the 
MatLab equivalent and found to give consistent output. Many of these functions will be used again when the mathematics 
is more broadly refactored and unit tested.


### Batch and Coverage testing
The goal of the batch testing was for users to be able to provide idealised CSV inputs and outputs and test the results 
of the mathematics against these inputs. To achieve this the ability to translate the JSON objects that store the app
data to CSV files and vica versa to transform CSV files are converted to JSON objects was built. Due to some technical 
limitations of JS we exposed this functionality as a tool that lets the user manually test files and download the JSON
that can then be used to repeat this test in an automated environment. Currently, this had be used to create tests 
internally but in phase 3 with the implementation of a backend will allow users to submit and store their own suit of 
automated tests.

### General improvements
As essential maintenance we address style concerns and make general UI improvements, as well as incrementing the 
versions of the site and build path dependencies. We also add a Git Actions script which automates the publication of 
the site via GitHub. This automation will eventually include the integration testing using the batch testing framework 
described above and the unit tests that are to be developed in the future.
