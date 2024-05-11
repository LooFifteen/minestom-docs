# Project Set-up

::: info
Minestom requires a Java version of 21 or higher.
:::

## Artifacts
| Artifact                       | Version                                                                                                                                                                           | Minecraft Version | GitHub                                                                                                                                                                       |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `com.github.Minestom:Minestom` | [![Maven Central](https://img.shields.io/maven-central/v/net.minestom/minestom-snapshots.svg?label=Maven%20Central)](https://mvnrepository.com/artifact/net.minestom/minestom-snapshots)                                                                                   | 1.20.4            | [![GitHub](https://img.shields.io/github/actions/workflow/status/Minestom/Minestom/snapshot-deploy.yaml.svg?label=GitHub)](https://github.com/Minestom/Minestom)                        |

## Dependencies

### Gradle

::: code-group

```kts [build.gradle.kts]
repositories {
    mavenCentral()
    maven("https://jitpack.io/")
}

dependencies {
    implementation("net.minestom:minestom-snapshots:REPLACE_WITH_VERSION")
}
```

```groovy [build.gradle]
repositories {
    mavenCentral()
    maven { url "https://jitpack.io/" }
}

dependencies {
    implementation "net.minestom:minestom-snapshots:REPLACE_WITH_VERSION"
}
```

:::

### Maven

Due to a Minestom dependency on `org.jboss.shrinkwrap.resolver:shrinkwrap-resolver-depchain`, you must exclude it from your build to allow Maven to work. This may mess with extension loading.

::: code-group

```xml [pom.xml]
<repositories>
    <repository>
        <id>jitpack</id>
        <url>https://jitpack.io/</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>net.minestom</groupId>
        <artifactId>minestom-snapshots</artifactId>
        <version>REPLACE_WITH_VERSION</version>
        <exclusions>
            <exclusion>
                <groupId>org.jboss.shrinkwrap.resolver</groupId>
                <artifactId>shrinkwrap-resolver.depchain</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
</dependencies>
```

:::

## Building a JAR

### Gradle

::: code-group

```kts [build.gradle.kts]
plugins {
    id("com.github.johnrengelman.shadow") version "8.1.1"
}

tasks.withType<Jar> {
    manifest {
        attributes["Main-Class"] = "com.example.Main" // replace with your main class
    }
}
```

```groovy [build.gradle]
plugins {
    id 'com.github.johnrengelman.shadow' version '8.1.1'
}

jar {
    manifest {
        attributes 'Main-Class': 'com.example.Main' // replace with your main class
    }
}
```

:::