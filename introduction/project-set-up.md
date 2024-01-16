# Project Set-up

::: info
Minestom requires a Java version of 17 or higher.
:::

## Artifacts
| Artifact                       | Version                                                                                                                                                                           | Minecraft Version | GitHub                                                                                                                                                                       |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `com.github.Minestom:Minestom` | [![JitPack](https://jitpack.io/v/Minestom/Minestom.svg)](https://jitpack.io/#Minestom/Minestom)                                                                                   | 1.19.3            | [![GitHub](https://img.shields.io/github/actions/workflow/status/Minestom/Minestom/tests.yml.svg?label=GitHub)](https://github.com/Minestom/Minestom)                        |
| `dev.hollowcube:minestom-ce`   | [![Maven Central](https://img.shields.io/maven-central/v/dev.hollowcube/minestom-ce.svg?label=Maven%20Central)](https://central.sonatype.com/artifact/dev.hollowcube/minestom-ce) | 1.20.4            | [![GitHub](https://img.shields.io/github/actions/workflow/status/hollow-cube/minestom-ce/snapshot-deploy.yaml.svg?label=GitHub)](https://github.com/hollow-cube/minestom-ce) |                                          

## Dependencies

### Gradle

::: code-group

```kts [build.gradle.kts]
repositories {
    mavenCentral()
    maven("https://jitpack.io/")
}

dependencies {
    implementation("com.github.Minestom:Minestom:REPLACE_WITH_VERSION")
}
```

```groovy [build.gradle]
repositories {
    mavenCentral()
    maven { url "https://jitpack.io/" }
}

dependencies {
    implementation "com.github.Minestom:Minestom:REPLACE_WITH_VERSION"
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
        <groupId>com.github.Minestom</groupId>
        <artifactId>Minestom</artifactId>
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