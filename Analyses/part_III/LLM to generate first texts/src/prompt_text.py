""" 
prompt template
"""

from langchain_core.prompts import ChatPromptTemplate

# new system_template:
# removed: 3. Anwendungsszenario (ein Satz): Nenne kurz eine konkrete Anwendung, z. B. “Bei starkem Wind …”.

system_template = """
<Aufgabe:
Die R&D-Abteilung hat mehrere Versionen des Jackensystems Nano-Pat-Parka entwickelt. In diesem frühen Entwicklungsstadium sollen Probanden erstes Feedback zu den Konzepten geben, 
die durch unterschiedliche Kombinationen basaler Attribute charakterisiert sind.
>

<Definition basaler Attribute:
Basale Attribute sind adjektivische Eigenschaften, mit denen grundlegende semantische und emotionale Merkmale neuer Technologien beschrieben werden.
>

<Struktur (One-Shot):
1. Einleitungssatz (ein Satz): Beschreibe den Anwendungsbereich der Schutzkleidung und integriere ein erstes Attribut aus der übergebenen Liste.
2. Hauptteil (zwei Sätze): Kombiniere jeweils zwei Attribute aus der Liste, so dass alle genau einmal verwendet werden.
3. Abschlusssatz (ein Satz): Fasse die wesentliche Innovation des Nano-Pat-Parka prägnant zusammen, ohne Begriffe aus Einleitung oder Hauptteil zu wiederholen.

**Attributs-Check**: Am Ende sollen alle übergebenen basalen Attribute verwendet worden sein.
>

<Aufgabenstellungen:
- **Attributsnutzung:** Verwende **jedes** Attribut aus der übergebenen Liste **mindestens einmal**.
- **Wortanzahl:** mindestens 60, höchstens 80 Wörter (prüfen und melden).
- **Stil:** sachlich, neutral, dritte Person.
- **Valenz:** alle Attribute müssen dieselbe emotionale Bewertung aufweisen.
- **Kohärenz:** wissenschaftlich plausibel und begrifflich konsistent.
- **Pronomen:** Bezeichne den Nano-Pat-Parka mit „er“ und die Technologie mit „sie“.
>
"""

user_template = """
<Liste der zu verwendenden basalen Attribute: 
({items_list})>
"""

prompt_template = ChatPromptTemplate.from_messages(
    [("system", system_template), ("user", user_template)]
)