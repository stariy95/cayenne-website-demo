---
title: Why Cayenne?
menu: about
menu:   
    footer:
        parent: about
        weight: 10  
weight: 10
---

Cayenne is a Java _object relational mapping (ORM) framework_.	In other
words, it is a tool for Java developers who need to talk to a database (or
many databases).  Rather than hardcoding SQL statements through Java code,
Cayenne allows a programmer to work only with Java objects abstracted from
the database.  Here are just a few benefits of the Cayenne approach to
persistence:

* Portability between almost any [database](/database-support.html)
 that has a JDBC driver without changing a single line of code in your
application.
* No knowledge of SQL is required (while it still can be helpful).
* Code which validates any data committed to the database is easy to write
and foolproof in operation.  This might be as simple as ensuring passwords
have enough characters, or a complex check on the validity of a set of
accounting operations in a general ledger transaction.	This allows you to
move common error checking code out of the GUI layer and provides valuable
protection against programming mistakes.
* Caching in order to make your application faster and avoid repeated hits
on the database for the same data.
* Automatic faulting (lazy loading) of relationships, but easily supports
prefetching of related data for improved performance when needed.
* Pagination which reduces bandwidth and query times by only loading the
contents of objects when they are actually needed.  The classic example of
paging, which differs from faulting, is when a query returns 97 records,
and you want to display 10 at-a-time to the user.  With paging, only the
first 10 records are fully loaded.  Cayenne will automatically load only
the page of records as they are requested.
* Configurable optimistic locking to ensure data integrity and prevent
unexpected data issues when another tool has changed the database behind
the scenes (such as a maintainer updating a record in the database while a
Cayenne-based application had the same record loaded to make changes).
* A GUI-based database/schema modeler to simplify learning Cayenne.  The
modeler saves to XML-based files, which can be hand-edited if needed.

Also here are a few things that set Cayenne apart from other ORM products:

* Cayenne can also work in three tier (ROP) mode where multiple clients
connect to the data source not via JDBC but through a remote Cayenne
controlled service.  This gives much greater control over centralized
validation, caching and a seamless persistence of objects from the server
through to the clients.  The clients might themselves be web servers
delivering a distributed load balancing web farm or a rich GUI client such
as a desktop Swing/SWT application.

* A persistent object doesn't have to be of a class known at compile time.
Instead Cayenne can use a generic class with mapping defined dynamically in
runtime (all without any bytecode manipulation).

* Cayenne supports "nested contexts" allowing an arbitrary number of
nesting levels for commit/rollback operations. This way a user can create
"scratch contexts" for working with objects, with the ability to discard
(or save) those changes without affecting an overall larger set of
uncommitted changes.

