# Method Functions



## Instance Methods



In the Java programming language, instance methods are methods that belong to an object of a class, rather than the class itself. Therefore, you need to create an instance of a class in order to call its instance methods. This contrasts with static methods, which belong to the class itself and can be called directly through the class without creating an object. Constructors, accessors, and modifiers are essential components of object-oriented programming principles, especially encapsulation. Here is a detailed explanation of each concept:
### 1. Constructors

Constructors are special types of methods used to create and initialize objects. When you create a new instance of a class using the new keyword, the constructor is called. Constructors must have the same name as the class and do not have a return type. In Java, a class can have multiple constructors, a feature known as constructor overloading. Each constructor has a different parameter list to provide various ways of initialization.
- **Parametrized Constructors**: You can define one or more constructors with different parameters to provide various ways of initialization.
- **No-Argument Constructors**:  If you do not provide any constructors for a class, the Java compiler automatically generates a default no-argument constructor, which does nothing but simply creates the object.

#### Parametrized Constructor


This constructor takes two parameters and uses them to initialize the state of the object:


```
javaCopy code
public BankAccount(String acctPassword, double acctBalance) {
    this.password = acctPassword;
    this.balance = acctBalance;
}
```

#### No-Argument Constructor (Default Constructor)


This constructor has no parameters and provides a method to create a class instance and initialize the object's state with default values:


```
javaCopy code
public BankAccount() {
    this.password = "";
    this.balance = 0.0;
}
```

When you know the password and balance of the account, you can use the parametrized constructor. However, if you want to create a bank account instance and you do not have an initial password and balance, or if you want to use some default values, the no-argument constructor is very useful.
#### The Necessity of Having Both


The coexistence of these two constructors offers the following advantages:


1. **Flexibility**:Allows developers to have more choices when creating objects. You can decide which constructor to use depending on whether you have initial values or not.
2. **Ease of Use**:Providing a no-argument constructor simplifies the process of creating objects when no initial values are needed.
3. **Compatibility**:If there are already calls to the no-argument constructor in the code, adding a parametrized constructor allows the existing code to continue working without any changes.
#### Complete Class Definition


Combining the two constructors you provided, the complete BankAccount class might look like this:



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

By providing two constructors, the BankAccount class can create objects more flexibly, regardless of whether initialization data is provided or not. This is a very common practice that allows developers to be more selective when declaring objects.



### 2. Accessors

Accessors, also known as getter methods, are used to access the values of an object's properties. In object-oriented design, direct access to an object's private properties is generally not permitted. Instead, you should access private property values through public getter methods. This provides a controlled way to read property values.


Accessor methods typically start with get followed by the property name (with the first letter capitalized). For example, an accessor for a property named balance might be named getBalance.


### 3. Mutators

Mutators, also known as setter methods, are used to set the values of an object's properties. Like accessors, directly modifying an object's private properties is not allowed. Instead, you should change private property values through public setter methods. This provides a controlled way to write property values.


Mutator methods typically start with set followed by the property name (with the first letter capitalized). For example, a mutator for a property named balance might be named setBalance.


These methods are an important part of encapsulation because they allow you to control access to and modification of properties. You can add additional logic, such as data validation or trigger other actions when property values change.


#### Example

Here is an example of the BankAccount class that includes constructors, accessors, and mutators:


```java
public class BankAccount {
    // Private fields
    private String password;
    private double balance;

    // Constructor with parameters
    public BankAccount(String acctPassword, double acctBalance) {
        this.password = acctPassword;
        this.balance = acctBalance;
    }

    // Default constructor
    public BankAccount() {
        this.password = "";
        this.balance = 0.0;
    }

    // Accessor for balance
    public double getBalance() {
        return this.balance;
    }

    // Mutator for balance
    public void setBalance(double newBalance) {
        // Additional logic can be added here, such as validation
        this.balance = newBalance;
    }

    // Accessor for password
    public String getPassword() {
        return this.password;
    }

    // Mutator for password
    public void setPassword(String newPassword) {
        // Additional logic can be added here, such as encryption or validation
        this.password = newPassword;
    }
}

```

This class uses accessors and mutators to manage access to its private fields, allowing controlled and safe interactions with the object's state.





## Static Methods

In Java, static methods (static method) belong to the class rather than any specific instance of the class. Methods declared with the `static` keyword can be called without creating an instance of the class, typically accessed directly through the class itself, in the format `ClassName.methodName()`.

### Characteristics

1. **Belongs to the Class**: Static methods belong to the class, not to instances of the class. Therefore, they cannot access the class's instance variables or instance methods (i.e., non-static fields and methods of the object).
2. **No Object Required**: Static methods can be called directly without creating an object instance.
3. **Global Variables**: Static methods are often used to operate on static variables, also known as class variables.
4. **Cannot be Overridden**: In inheritance, static methods cannot be overridden by non-static methods in subclasses.
5. **Can be Hidden**: If a subclass defines a static method with the same signature as one in the parent class, the parent class's static method is hidden, not overridden. Which method is called depends on the class context in which the method call is made.

### Uses

Static methods are commonly used for utility or helper functions, such as mathematical calculations, file operations, etc., that do not need to access the state of any object because they do not process data specific to an object. For example, the `Math` class provides many static methods, such as `Math.sqrt(double a)`, which can be called directly without creating a `Math` class object.

### Example

```
javaCopy code
public class Calculator {

    public static int add(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }
}
```

Using static methods:

```
javaCopy code
int sum = Calculator.add(5, 3);        // Call static method, no need to create an object of the Calculator class
int difference = Calculator.subtract(5, 3);
```

In this example, the `add` and `subtract` methods can be called directly because they are static. They do not depend on any state of the `Calculator` class, so basic mathematical operations can be performed without needing to create an object.

### Accessing Static Methods

- Static methods can be called directly by the class name.
- If a static method is called within the same class, the class name can be omitted.
- Static methods can also be called through an object of the class, but this is not recommended as it may cause confusion when reading the code.

In summary, static methods are very useful for generic operations that do not depend on the state of an object, providing a convenient way to organize utility methods.
