# Emerging Technologies Assessment Repository

**Author:** Adam Amusa (G00400197@atu.ie)

##  Overview

This repository contains an assessment for the module, featuring two main components:
- A Trigrams Notebook (`trigrams.ipynb`)
- An Eliza Chatbot (`/eliza`)

##  Getting Started

### Prerequisites
1. [Python](https://www.python.org/downloads/) installed
2. Jupyter Notebook Installed


### Repository Setup
1. Clone the repository
   ```bash
   git clone https://github.com/AdamAmusa/EmergingTech
   cd EmergingTech
   ```

##  Installation

### Python and Jupyter Notebook

#### Using pip
```bash
pip install notebook
```

#### Using Conda
```bash
conda install -c conda-forge notebook
```

### Eliza Component
No additional installation required. The project uses standard web technologies.

##  Usage

### Trigrams Notebook

#### Method 1: Jupyter Notebook
1. Open the notebook
   ```bash
   jupyter notebook trigrams.ipynb
   ```

#### Method 2: Visual Studio Code
1. Navigate to the project directory
   ```bash
   cd path/to/your/project
   code .
   ```
2. Open `trigrams.ipynb`

**Important:** Execute cells in sequential order

#### Expected Outputs
- Dictionary of trigrams
- Percentage of trigram words that are real English words

   ### How trigrams.ipynb Works
   1. Reads text from an English literature
   2. Splice all the text into segments of three characters, known as trigrams.
   3. Enumerate the number of times each segment appears in the text.
   4. Return a dictionary whose keys are the trigrams and whose value is the number of times the trigrams appear in the text.
   5. Store and output a sequence of randomly generated characters using the trigrams and their values as their weight.
   6. Compare the sequence of characters with real English words and determine the percentage that are English.

### Eliza Chatbot

1. Navigate to the https://adamamusa.github.io/EmergingTech/eliza/
2. Interact with the chatbot by entering text inputs
   ### How Eliza Works
   1. If the user input matches the response pattern
   2. Get the regex match (Word difference) (r "I am (.*)" user input: "I am happy" regex match: "happy")
   3. Select a random response from the pattern 
   4. Check if the regex match is a reflection word and change it if its
   5. Return a response with the reflection word


##  Dependencies

Both components use standard libraries:
- Trigrams Notebook: Python standard library
- Eliza: Standard web technologies (HTML, JavaScript, CSS)

##  Notes
- Ensure you have a modern web browser for the Eliza component
- Python 3.x recommended for the Trigrams Notebook
