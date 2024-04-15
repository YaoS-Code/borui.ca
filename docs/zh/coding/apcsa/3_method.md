# 函数方法



## 实例方法

在Java编程语言中，实例方法是指属于类的对象的方法，而不是属于类本身的。因此，你需要创建一个类的实例才能调用该类的实例方法。这与静态方法相对，静态方法属于类本身，可以不创建对象直接通过类来调用。构造函数、访问器和修改器是实现面向对象编程原则的重要组成部分，尤其是封装。下面是每个概念的详细解释：

### 1. 构造函数（Constructors）

构造函数是一种特殊类型的方法，用于创建和初始化对象。当你使用`new`关键字创建一个类的新实例时，构造函数会被调用。构造函数的名字必须和类名相同，并且它们没有返回类型。在Java中，一个类可以有多个构造函数，这被称为构造函数重载。每个构造函数都有不同的参数列表，以提供不同的初始化方式。

- **有参构造函数**：你可以定义一个或多个构造函数，带有不同的参数，以提供不同的初始化方式。

- **无参构造函数**：如果你没有为类提供任何构造函数，Java编译器会自动生成一个默认的无参构造函数，它不会做任何事情，只是简单地创建对象。

#### 有参数的构造函数

这个构造函数接收两个参数，并使用这些参数来初始化对象的状态：

```
javaCopy code
public BankAccount(String acctPassword, double acctBalance) {
    this.password = acctPassword;
    this.balance = acctBalance;
}
```

#### 无参数的构造函数（默认构造函数）

这个构造函数没有参数，它提供了一种创建类实例并使用默认值初始化对象状态的方法：

```
javaCopy code
public BankAccount() {
    this.password = "";
    this.balance = 0.0;
}
```

当您知道账户的密码和余额时，您可以使用有参数的构造函数。但如果您想创建一个银行账户实例，并且您没有初始密码和余额，或者您想使用一些默认值，无参数的构造函数就很有用了。

#### 同时存在的必要性

这两种构造函数的共存有以下优点：

1. **灵活性**：允许开发者在创建对象时有更多的选择。您可以根据是否拥有初始值来决定使用哪个构造函数。
2. **易用性**：对于不需要初始值的情况，提供一个无参数的构造函数可以简化对象的创建过程。
3. **兼容性**：如果代码中已经存在对无参数构造函数的调用，添加一个有参数的构造函数后，原有的代码不需要任何改变就可以继续工作。

#### 完整的类定义

结合您提供的两个构造函数，完整的`BankAccount`类可能看起来像这样：

```
javaCopy code
public class BankAccount {
    private String password;
    private double balance;

    /** No-argument constructor.
    * Constructs a bank account with default values. */
    public BankAccount() {
        this.password = "";
        this.balance = 0.0;
    }

    /** Parameterized constructor.
    * Constructs a bank account with provided password and balance. */
    public BankAccount(String acctPassword, double acctBalance) {
        this.password = acctPassword;
        this.balance = acctBalance;
    }

    // Additional methods like getters, setters, etc.
}
```

通过提供两个构造函数，`BankAccount` 类可以更灵活地创建对象，无论是否提供了初始化数据。这是一种非常常见的做法，允许开发者在声明对象时更具选择性。



### 2. 访问器（Accessors）

访问器，也称为获取方法（getter methods），用于访问对象的属性值。在面向对象的设计中，直接访问对象的私有属性通常是不被允许的。相反，你应该通过公共的访问方法来获取私有属性的值。这提供了一个读取属性值的受控方式。

访问器方法通常以`get`为前缀，后跟属性名（首字母大写）。例如，获取名为`balance`的属性的访问器可能被命名为`getBalance`。

### 3. 修改器（Mutators）

修改器，也称为设置方法（setter methods），用于设置对象的属性值。和访问器一样，直接修改对象的私有属性也是不被允许的。相反，你应该通过公共的修改方法来更改私有属性的值。这提供了一个写入属性值的受控方式。

修改器方法通常以`set`为前缀，后跟属性名（首字母大写）。例如，设置名为`balance`的属性的修改器可能被命名为`setBalance`。

这些方法是封装的重要组成部分，因为它们允许你控制属性的访问和修改，你可以添加额外的逻辑，比如验证数据，或者在属性值改变时触发其他的操作。

#### 示例

下面是一个包含构造函数、访问器和修改器的`BankAccount`类的例子：

```java
public class BankAccount {
    private String password;
    private double balance;

    // 构造函数
    public BankAccount(String password, double balance) {
        this.password = password;
        this.balance = balance;
    }

    // 访问器（Accessors） - getters
    public String getPassword() {
        return this.password;
    }

    public double getBalance() {
        return this.balance;
    }

    // 修改器（Mutators） - setters
    public void setPassword(String newPassword) {
        // 这里可以添加密码验证逻辑
        this.password = newPassword;
    }

    public void setBalance(double newBalance) {
        // 这里可以添加余额验证逻辑
        this.balance = newBalance;
    }
}
```

在这个例子中，`setPassword`和`setBalance`方法可以在满足某些条件（例如，密码符合特定格式或余额不为负数）的情况下才设置值。这些条件是在方法内部定义的，提供了对数据的有效保护。



## 静态方法

在Java中，静态方法（static method）是属于类的方法，而不是属于类的某个具体对象的。使用`static`关键字声明的方法可以在没有创建类实例的情况下调用，通常通过类本身直接访问，格式为`ClassName.methodName()`。

### 特点

1. **属于类**：静态方法属于类，而不是类的实例。因此，它们不能访问类的实例变量或实例方法（即对象的非静态字段和方法）。

2. **无需对象**：可以不创建对象实例而直接调用静态方法。

3. **全局变量**：静态方法通常用于操作静态变量，也被称作类变量。

4. **无法被覆盖**：在继承中，静态方法不能被子类覆盖成非静态方法。

5. **可以被隐藏**：如果子类定义了与父类相同签名的静态方法，父类的静态方法将被隐藏，而不是被覆盖。调用哪个方法取决于方法调用是在哪个类名的上下文中进行的。

### 用途

静态方法常用于工具或助手方法，如数学计算、操作文件等，它们不需要访问对象的状态，因为它们不处理特定对象的数据。例如，`Math` 类提供了很多静态方法，如 `Math.sqrt(double a)`，这些方法可以直接调用，无需创建 `Math` 类的对象。

### 示例

```java
public class Calculator {

    public static int add(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }
}
```

使用静态方法：

```java
int sum = Calculator.add(5, 3);        // 调用静态方法，无需创建Calculator类的对象
int difference = Calculator.subtract(5, 3);
```

在这个例子中，`add` 和 `subtract` 方法可以直接调用，因为它们是静态的。它们不依赖于 `Calculator` 类的任何实例状态，所以不需要创建对象就可以执行基本的数学运算。

### 访问静态方法

- 静态方法可以通过类名直接调用。
- 如果静态方法在同一个类中被调用，可以省略类名。
- 静态方法也可以通过类的对象来调用，但这不是推荐的做法，因为它可能会在阅读代码时造成混淆。

总之，静态方法对于不依赖于对象状态的通用操作非常有用，它们提供了一种组织工具方法的便捷方式。





## Practice

#### Questions 1–3 refer to the Time class declared below.

```java
public class Time{
  
  private int hrs; 
  private int mins; 
  private int secs;
  
  public Time
  { /* implementation not shown */ }
  
  public Time (int h, int m, int s)
  {/* implementation not shown */ }
  /** Resets time to hrs = h, mins = m, secs = s. */
  
  public void resettime (int h, int m, int s)
  {/* implementation not shown */ }
  /** Advances time by one second. */ 
  
  public void increment
  {/* implementation not shown */ }
  /** Returns true if this time equals t, false otherwise. */ 
  
  public boolean equals (Time t)
  { /* implementation not shown */ }
  /** Returns true if this time is earlier than t, false otherwise. */ 
  
  public boolean lessThan (Time t)
  {/* implementation not shown */ }
  /** Returns a String with the time in the form hrs:mins: secs. */ 
  
  public String toString(
  {/* implementation not shown */ 
}
```

DBCCB CEEAA CBECD EDBED AAC



```
1.Which of the following is a false statement about the methods?
(A)equals, lessThan, and toString are all accessor methods.
(B)increment is a mutator method.
(C)Time() is the no-argument constructor.
(D)The Time class has three constructors.
(E)There are no static methods in this class.
```

