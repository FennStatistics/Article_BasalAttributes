""" 
Check resulting data from LLM
"""

import re
import unicodedata
import Levenshtein  # Uses fast C-implementation of edit distance

def preprocess(text):
    text = text.lower()
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("utf-8")
    text = re.sub(r"[*()\[\]{}]", "", text)           # Remove asterisks and brackets
    text = text.replace("-", " ")                     # Replace hyphens with spaces
    text = re.sub(r"[^\w\s]", "", text)               # Remove remaining punctuation
    text = re.sub(r"\s+", " ", text)                  # Normalize whitespace
    return text.strip()

def format_results(results):
    formatted_output = "Exact Matches:\n"
    if not results["Exact Matches"]:
        formatted_output += "None\n"
    else:
        for phrase in results["Exact Matches"]:
            formatted_output += f"- '{phrase}'\n"

    formatted_output += "\nMissing Words:\n"
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
    cleaned_text = preprocess(description.replace("*", ""))
    expected_phrases = [preprocess(phrase) for phrase in combined_subset.split("//")]

    exact_matches = []
    missing_phrases = []
    partial_matches = []

    text_tokens = cleaned_text.split()

    for expected in expected_phrases:
        found_exact = False
        found_partial = False
        expected_len = len(expected.split())

        # Check exact match using sliding window
        for i in range(len(text_tokens) - expected_len + 1):
            window = " ".join(text_tokens[i:i + expected_len])
            if expected == window:
                exact_matches.append(expected)
                found_exact = True
                break

        if found_exact:
            continue

        # Partial match via Levenshtein
        for i in range(len(text_tokens) - expected_len + 1):
            window = " ".join(text_tokens[i:i + expected_len])
            distance = Levenshtein.distance(expected, window)
            if distance <= max_distance:
                partial_matches.append((expected, window, distance))
                found_partial = True
                break

        if not found_partial:
            missing_phrases.append(expected)

    return format_results({
        "Exact Matches": exact_matches,
        "Missing Words": missing_phrases,
        "Partial Matches": partial_matches
    })
