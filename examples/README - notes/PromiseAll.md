# Promesse multiple

La méthode **Promise.all** retourne une promesse qui est résolue avec un tableau de valeurs retournées par les promesses passées en argument. Si toutes les promesses sont résolues avec succès, la promesse retournée par Promise.all est résolue avec un tableau contenant les valeurs retournées par les promesses, reprenant l'ordre dans lequel elles ont été passées en argument.


Cependant, si l'une des promesses passées en argument est rejetée, alors la promesse retournée par Promise.all est immédiatement rejetée avec la raison du rejet de cette promesse. Les autres promesses passées en argument ne sont pas affectées et continuent de s'exécuter jusqu'à leur résolution ou leur rejet, mais leurs résultats ne sont pas inclus dans le tableau de valeurs retourné par Promise.all


# Que se passe-t-il si l'une des promesses passées à Promise.all() est rejetée ?

La première promesse rejetée met fin à l'exécution et renvoie l'erreur. Lorsque Promise.all() est appelée avec plusieurs promesses, si l'une d'entre elles est rejetée, la méthode renvoie une nouvelle promesse qui est rejetée avec l'erreur correspondante. Cette méthode attend donc que toutes les promesses soient résolues avec succès pour renvoyer une promesse résolue, ou qu'au moins une promesse soit rejetée pour renvoyer une promesse rejetée.