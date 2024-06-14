""" 
prompt template
"""

template_partitions = """



<Aufgabe:
Entwickle eine für Laien verständliche Beschreibung eines neuen Materialsystems für den Einsatz in einem realen Bau- oder Infrastrukturprojekt. Das Projekt sollte die Eigenschaften des Materials nutzen, um bestehende Probleme effektiv zu adressieren, während es auch auf mögliche Herausforderungen und Schwierigkeiten des Materialsystems eingeht. 


Genrell zeichnet sich das neue Materialsystem durch neuartige Eigenschaften aus, die es von herkömmlichen Materialien unterscheidet. Verwende hierzu alle Wörter aus der folgenden Liste, um die neuartigen Eigenschaften, aber auch die bestehenden Herausforderungen des Materialsystems zu beschreiben.>

<Liste:
({items_list})>

<Aufgabenstellungen:
1) Der Text muss weniger als 150 Wörter beinhalten.
2) Schreibe neutral aus der Dritten Person und beziehe dich auf das konkrete Projekt.
3) Achte bei der Verwendung der Wörter darauf, nicht Wörter mit unterschiedlichen emotionalen Konnotationen zu vermischen.
4) Das Projekt muss konkret und plausibel sein.
5) Beginne mit einem einleitenden kurzen Satz, der das Projekt beschreibt.
6) Gehe Schritt für Schritt vor. 
7) Verwende alle Wörter, die in der Liste angegeben sind.>

    Answer: """

template_partitions_OLD = """
<Aufgabe:
"Schreibe eine kurze Erzählung, welche eine neue Materialtechnologie in einer realen Anwendung beschreibt. 
Die Erzählung sollte sich um ein technisches oder wissenschaftliches Projekt drehen, bei dem 
Werbematerialien für ein neues Bau- oder Infrastrukturprojekt entwickelt werden, bei dem dieses 
innovative Material zum Einsatz kommt. Das Projekt sollte in einem Umfeld angesiedelt sein, in dem die 
einzigartigen Eigenschaften des Materials bestehende Probleme lösen könnten, 
es aber möglicherweise noch zugrundeliegende Herausforderungen gibt, 
die in den Werbematerialien nicht vollständig angesprochen werden. 
Verwende dabei alle Wörter aus der folgenden Liste.>

<Liste:
({items_list})>

<Aufgabenstellungen:
1) Der Text muss weniger als 200 Wörter beinhalten.
2) Schreibe neutral aus der Dritten Person.
3) Die Anwendung muss plausibel sein.
4) Gehe Schritt für Schritt vor. 
5) Verwende alle Wörter, die in der Liste angegeben sind.>

    Answer: """


test_prompt_text = """
A person is asked to describe a situation based on a few words:
"""

desired_ouput_neg = """
Dave Smith is developing an advertisement for a new housing development his firm is about to start. 
The development is located in a low area which has flooded in the past. 
The company has recently done some work to reduce the danger of flooding in the future. 
In the preliminary advertisement, Smith has included a statement indicating that the firm has solved the flooding problem. 
The fact is that if a flood occurs, the homes are still likely to have up to a foot of water standing in the yards.
"""

desired_ouput_pos = """
Dave Smith is developing an advertisement for a new housing development his firm is launching soon. 
Located in an area prone to flooding in the past, the company has undertaken significant improvements to mitigate this risk. 
In the preliminary advertisement, Smith highlights the firm's commitment to enhancing flood defenses. 
While acknowledging that extreme weather could still bring water into the yards, the firm has effectively minimized the potential 
for home damage, ensuring the development is safer and more resilient than ever before.
"""

task = """
"Imagine a scenario where a construction company is developing a new housing complex using a revolutionary but untested material system. 
The material is known to be 'wartungsintensiv' (maintenance-intensive), has an uncertain 'Akzeptanz eines neuen Materialsystems' 
(acceptance of a new material system), and is 'leicht zerstörbar' (easily destructible). 

Write a short story related to this new material system.
Imagine you are 'Dave Smith', a marketing manager at the construction company.
"""
