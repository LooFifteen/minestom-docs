# Create a Server

The typical flow of creating a server is as follows:
* Initialize the server
* Register listeners, commands, etc.
* Start the server

## Examples

```java
public static void main(String[] args) {
    // initialize the server
    MinecraftServer server = MinecraftServer.init();

    // register listeners, commands, etc.

    // start the server
    server.start("0.0.0.0", 25565);
}
```
However, when connecting the server, you will notice that you will not join. This is because the server does not have an [instance](/world/instances) to send you to. To resolve this, we must create and register and instance. Then, sending the player to said instance is as simple as setting it on an [event](/events/summary).
```java
public static void main(String[] args) {
    // initialize the server
    MinecraftServer server = MinecraftServer.init();

    // create an instance
    InstanceContainer instance = MinecraftServer.getInstanceManager().createInstanceContainer();
    instance.setGenerator(unit -> unit.modifier().fillHeight(0, 40, Block.GRASS_BLOCK));
    
    // send the player to the instance on join
    MinecraftServer.getGlobalEventHandler().addListener(PlayerLoginEvent.class, event -> {
        event.setSpawningInstance(instance);
        event.getPlayer().setRespawnPoint(new Pos(0, 42, 0));
    });

    // start the server
    server.start("0.0.0.0", 25565);
}
```  