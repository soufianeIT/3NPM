#### Introduction à NoSQL

1. **Qu'est-ce que NoSQL ?**
   * NoSQL signifie « Pas seulement SQL ».
   * Conçu pour les bases de données non relationnelles, il permet de stocker et récupérer des données de manière différente des bases de données relationnelles (SQL).
   * Types de bases de données NoSQL :
     * **Magasins de documents** (ex : MongoDB)
     * **Magasins de valeurs clés** (ex : Redis)
     * **Magasins à colonnes larges** (ex : Cassandra)
     * **Bases de données graphiques** (ex : Neo4j)
2. **Avantages du NoSQL :**
   * **Scalabilité Horizontale** : Ajout facile de serveurs pour gérer des augmentations de charges.
   * **Flexibilité des Modèles de Données** : Adaptation facile aux changements de schémas.
   * **Performance** : Optimisé pour certaines opérations (ex : lecture/écriture rapide).
   * **Gestion des Données Non Structurées** : Idéal pour des données non uniformes.
3. **Cas d'utilisation du NoSQL :**
   * Applications web et mobiles nécessitant une haute disponibilité.
   * Systèmes de gestion de contenu, réseaux sociaux.
   * Analyses en temps réel et systèmes de recommandation.

---

#### Introduction à MongoDB

1. **Qu'est-ce que MongoDB ?**

   * Une base de données orientée documents NoSQL.
   * Stockez les données sous forme de documents JSON (BSON - Binary JSON).
2. **Caractéristiques Principales de MongoDB :**

   * **Documents** : Enregistrez les données en documents similaires à JSON.
   * **Collections** : Groupes de documents.
   * **Schéma Flexible** : Les documents dans une même collection peuvent avoir des champs différents.
   * **Indexation** : Supporte l'indexation des champs pour des recherches rapides.
   * **Réplicas et Sharding** : Assurer la haute disponibilité et la scalabilité horizontale.
3. **Commandes de base :**

   * **Insertion** :`db.collection.insertOne({})`
   * **Conférence** :`db.collection.find({})`
   * **Mise à Jour** :`db.collection.updateOne({}, {$set: {}})`
   * **Suppression** :`db.collection.deleteOne({})`
4. **Avantages de MongoDB :**

   * **Flexibilité** : Adaptation rapide aux besoins changeants.
   * **Performance** : Optimisé pour les lectures et écritures massives.
   * **Scalabilité** : Facilement extensible avec la croissance des données.
5. **Les inconvénients deu NoSQL**

   **Consistance** :Les bases de données NoSQL adoptent souvent le modèle de consistance éventuelle pour assurer la disponibilité et le partitionnement tolérant (théorème CAP). Cela peut conduire à des lectures de données obsolètes.

   **Absence de Relations** :Les bases de données NoSQL n'ont pas de relations entre les tables comme les bases de données SQL
6. #### Introduction à la Librairie Mongoose
7. **Qu'est-ce que Mongoose ?**

   * Un ORM (Object-Document Mapping) pour MongoDB en Node.js.
   * Simplifiez les interactions avec MongoDB en offrant une structure pour définir des schémas et interagir avec les documents.

#### Introduction à la Librairie Mongoose

1. **Qu'est-ce que Mongoose ?**

   * Un ODM (Object-Document Mapping) pour MongoDB en Node.js.
   * Simplifier les interactions avec MongoDB en offrant une structure pour définir des schémas et interagir avec les documents.
2. **Installation de Mongoose :**

   ![1719389517883](./image/support_cours/1719389517883.png)
