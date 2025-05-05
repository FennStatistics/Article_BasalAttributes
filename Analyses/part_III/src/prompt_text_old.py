""" 
prompt template
"""

from langchain_core.prompts import ChatPromptTemplate

system_template_old1 = """
<Aufgabe:
Entwickle eine für Laien verständliche, aber wissenschaftlich fundierte Beschreibung eines neuartigen Jackensystems namens Nano-Pat-Parka. 
Ziel ist es, anhand sogenannter basaler Attribute – also grundlegender, semantisch und emotional bewerteter Merkmale neuer Technologien – die möglichen Vorteile und Herausforderungen dieser Technologie zu verdeutlichen.

Basale Attribute sind adjektivische Eigenschaften (z. B. „autonom“, „wartungsintensiv“, „bioinspiriert“), die typischerweise verwendet werden, um neue technologische Systeme zu beschreiben. 
Sie dienen der kognitiven und affektiven Bewertung und ermöglichen eine strukturierte Beschreibung technischer Systeme auf einer allgemeinen Ebene – unabhängig von konkreten Details.

Die Beschreibung des Nano-Pat-Parka soll sich mehrheitliich auf diese basalen Attribute stützen, ohne große Ausführungen zu konkreten technischen Funktionen oder mechanistischen Erklärungen. 
Das Jackensystem soll funktional generisch beschrieben werden – als Technologie, die auf zukünftige Anforderungen im Bereich Schutzkleidung reagiert.>

<Aufgabenstellungen:
1) ***Der Text MUSS zwischen 60 und 80 Wörter enthalten.*** Weniger als 60 Wörter sind nicht zulässig. Kontrolliere dieses bevor du den Text absendest.
2) Schreibe sachlich, neutral und aus der dritten Person.
3) Achte darauf, keine basalen Attribute mit stark gegensätzlicher emotionaler Valenz zu vermischen.
4) Die Beschreibung muss wissenschaftlich plausibel und begrifflich konsistent sein.
5) Beginne mit einem einleitenden Satz, der den Anwendungsbereich der Technologie allgemein beschreibt.
6) Verwende ALLE Wörter, die in der Liste angegeben sind.
7) Schreibe einen abschließenden Satz, der die Technologie zusammenfasst.>
"""


# new system_template:

system_template_old2 = """
<Aufgabe:
Entwickle für Laien eine wissenschaftlich fundierte Beschreibung des neuartigen Jackensystems Nano-Pat-Parka. 
>

<Struktur (One-Shot):
1. Einleitungssatz: Beschreibe den allgemeinen Anwendungsbereich und nenne ein zwei erste basale Attribute (z. B. „bioinspiriert“).
2. Hauptteil (zwei Sätze): Erkläre alle basale Attribute aus der Liste {attributes_list} – alle mit gleicher emotionaler Valenz und ohne gegensätzliche Konnotation.
3. Abschlusssatz: Fasse die Technologie knapp zusammen, ohne Wortwiederholungen aus dem Einleitungssatz.
>

<Anforderungen:
- **Wortanzahl:** mindestens 60, höchstens 80 Wörter (prüfe vor Absendung).
- **Stil:** sachlich, neutral, dritte Person.
- **Attribute:** nutze alle Begriffe aus {attributes_list}.
- **Kohärenz:** wissenschaftlich plausibel, begrifflich konsistent.
- **Valenz:** keine Mischung stark gegensätzlicher emotionaler Bewertungen.
>
"""