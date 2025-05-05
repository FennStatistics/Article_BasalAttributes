""" 
Check resulting data from LLM
"""

import string
import Levenshtein  # Uses fast C-implementation of edit distance

def preprocess(text):
    return text.lower().translate(str.maketrans("", "", string.punctuation)).strip()

def format_results(results):
    formatted_output = "Missing Words:\n"
    if not results["Missing Words"]:
        formatted_output += "None\n"
    else:
        for word in results["Missing Words"]:
            formatted_output += f"- '{word}' was not found.\n"

    formatted_output += "\nPartial Matches:\n"
    if not results["Partial Matches"]:
        formatted_output += "None\n"
    else:
        for word, matched_word, distance in results["Partial Matches"]:
            formatted_output += (
                f"- '{word}' ~ '{matched_word}' (Levenshtein distance = {distance})\n"
            )

    return formatted_output

def check_for_missing_matching_words(description, combined_subset, max_distance=2):
    # Preprocess text
    cleaned_text = preprocess(description.replace("**", ""))
    words_in_text = set(cleaned_text.split())

    # Preprocess expected words
    expected_words = [preprocess(word) for word in combined_subset.split("//")]

    missing_words = []
    partial_matches = []

    for expected in expected_words:
        if expected in words_in_text:
            continue

        # Check Levenshtein distance
        found_partial = False
        for text_word in words_in_text:
            distance = Levenshtein.distance(expected, text_word)
            if distance <= max_distance:
                partial_matches.append((expected, text_word, distance))
                found_partial = True
                break

        if not found_partial:
            missing_words.append(expected)

    return format_results({
        "Missing Words": missing_words,
        "Partial Matches": partial_matches
    })
