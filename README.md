# Know Your Ward

## Prologue

Members of certain localities in Chennai participate in a survey.

The survey aims
-  to understand awareness of citizens regarding services and infrastructure
-  collect qualitative feedbacks regarding infrastructures like drainage system, road conditions, education etc.


## The App

This app aggregates answers from participants(anonymised). And then curates an experience to inform users

-  details on city services encompassing distinct aspects
-  qualitative gradation of city services
-  recognise pressing issues
-  call to action to help improve infrastructures

The app development cycles are iterative.

We are beginning with

-  List questions and display the distribution of answers through a bar/pie chart

-  Filter questions based on participant's attributes like
    -  Sex
    -  Locality

-  Filter questions based on different domains of city infrastructure and services like
    -  education
    -  food
    -  drainage



## Glossary
These terms are used as defined within the code for better documentation.

**Survey** - The collection of participant's answers to over 150 questions in this case. This app concerns only one survey conducted the city.

**Question** - An enquiry regarding city condition demanding a response from the participant.

Attributes of *question*
-  **Category** - Describe the domain of city infrastructure like food or education that the question belongs/relates to

**Response** - A *participant's* opinion or knowledge regarding the question

Some responses are
-  qualitative (Strongly Agree, Agree, Disagree, Strongly Disagree)
-  ratings (1 - 5)
-  awareness (Yes/No)

**Participant** - The person taking the survey.

Attributes of a *participant*
  -  Gender
  -  Age
  -  Locality
  -  Ward Number
  -  Occupation
  -  Pin Code


**Filters** - Help user make an informed decision to focus on particular questions grouped by  scope of attributes related to question or participants


## Development
-  Clone the repo and `cd` into it
-  `yarn`
-  `json-server --port=3004 ./db.json`
-  `yarn start`

This app is generated by [create-react-app](https://github.com/facebook/create-react-app).
