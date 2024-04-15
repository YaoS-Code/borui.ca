# Java



## 你的第一个Java程序

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
// Hello, World!
```

在Java中，类（class）是一个非常核心的概念。Java是一种面向对象的编程语言，这意味着几乎所有的代码结构都是围绕对象（object）和类的概念来构建的。在Java中，几乎每个程序都必须包含至少一个类才能运行。


### 在HelloWorld中引用我们Person

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        Person person = new Person("Borui Education", 4);
        person.introduce();
    }

}

//Hello, World!
//Hello, my name is Borui Education and I am 4 years old.
```



### 文件系统

![image-20240401103701198](../../../public/coding/image-20240401103701198.png)









## Java中为什么要有包的概念



##### Java中的`package`（包）概念是为了解决以下几个关键问题而引入的：

#### 1. 组织性

随着项目的增长，单一文件夹中可能会出现成百上千个Java文件，这会使得代码库变得难以管理和维护。包允许开发者将相关的类和接口组织在一起，便于管理和使用。例如，一个处理数据库连接的类可以被放在一个名为`database`的包中，而处理用户界面的类可以放在`ui`包中。

#### 2. 命名冲突

在大型项目或当合并多个项目时，很容易出现类名冲突的情况。包提供了一种命名空间功能，允许同名类的存在，只要它们位于不同的包中。这意味着你可以有两个名为`Date`的类，一个在`com.myproject.util`包中，另一个在`java.util`包中，它们可以和平共存，不会产生命名上的冲突。

#### 3. 访问控制

Java中的包提供了一种控制类及其成员访问级别的机制，通过定义不同的访问修饰符来实现。Java支持四种访问级别：`private`、`default`（未明确指定访问修饰符）、`protected`、以及`public`。不同的访问修饰符决定了类成员（如字段、方法、构造器等）在何处可被访问，从而实现了封装性，有助于隐藏实现细节和保护数据。

#### 4. 重用性和可维护性

通过将功能相似的类和接口组织在一起，包促进了代码的重用。其他项目可以轻松地导入和使用这些包，而不必担心命名冲突或依赖问题。同时，这也使得维护和更新成为了一件轻松的事情，因为相关的代码都集中在一起。

#### 5. 易于分发

包结构也使得Java应用程序更容易打包和分发。例如，Java的JAR文件格式就是基于包结构的，它允许开发者将Java应用程序或库的相关文件（类文件、资源文件等）打包到一个单一的归档文件中。这简化了应用程序的部署和分发过程。

#### 总结

综上所述，Java中的包概念是面向对象编程的一个重要组成部分，它通过提供组织性、解决命名冲突、控制访问级别、促进重用性和可维护性、以及简化分发过程，大大增强了Java代码的可管理性、灵活性和可扩展性。
