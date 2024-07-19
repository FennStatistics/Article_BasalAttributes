 # Generate list of basal attributes

 Generated a list of 32 basal attributes based on expert interviews and existing literature, involving three steps:

1. [Reducing inital wordlist](https://github.com/FennStatistics/Article_BasalAttributes/tree/main/Analyses/part_I/1.%20reducing%20wordlists) - The initial basal attributes list from guided expert interviews was translated and reduced in multiple steps by experts.
    + The list was refined to exclude overly generic adjectives such as "modern" and "innovative" that lack specific relevance to material systems.
    + Ensuring the final list of basal attributes is easily understandable for laypersons.
2. [World cafe](https://github.com/FennStatistics/Article_BasalAttributes/tree/main/Analyses/part_I/2.%20world%20cafe) - A world café format was employed to facilitate an expert evaluation of the revised list.
    + Experts had the opportunity to propose additional attributes relevant to their distinct research areas.
3. [Scan publications](https://github.com/FennStatistics/Article_BasalAttributes/tree/main/Analyses/part_I/3.%20scan%20publications) - Automated scans of existing livMatS publications were conducted to extract relevant adjectives to augment the attribute list; contains two steps:
    + get titles of all current livMatS publications from https://www.livmats.uni-freiburg.de/en/publications
    + download all articles, identify articles containing word "demonstrator", copy abstracts, extract adjectives from abstracts by applying standardized part-of-speech tags from the open-source library for Natural Language Processing spaCy (Python)
        + final result of the cleaned (like removing duplicates) extracted adjectives can be found in "clean list of adjectives.xlsx"