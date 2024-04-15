

# Data Structures in Java

In Java, data types are classified into two main categories: Primitive Data Types and Reference Data Types. Understanding the differences between these two types is crucial for effective use of Java.

### Primitive Data Types

Java has eight basic data types, which represent common numbers, characters, and boolean values. These types occupy fixed memory sizes and store values directly.

1. Integer Types
   - `byte`: 8-bit, signed. Ranges from -128 to 127.
   - `short`: 16-bit, signed. Ranges from -32,768 to 32,767.
   - `int`: 32-bit, signed. Ranges from -2^31 to 2^31-1. It is the most commonly used integer type in Java.
   - `long`: 64-bit, signed. Ranges from -2^63 to 2^63-1. It is used with an L suffix, e.g., `123L`.
2. Floating-Point Types
   - `float`: 32-bit, IEEE 754 standard. It is used with an F suffix, e.g., `123.4F`.
   - `double`: 64-bit, IEEE 754 standard. It is the default decimal type in Java.
3. Character Type
   - `char`: 16-bit, Unicode character. Ranges from `\u0000` (i.e., 0) to `\uffff` (i.e., 65,535).
4. Boolean Type
   - `boolean`: Has only two possible values, `true` and `false`. Its size isn't explicitly defined but is usually 1 bit.

### Reference Data Types

Reference types point to an object's or array's address in memory. Common reference data types include classes (Class), interfaces (Interface), and arrays (Array).

1. Class
   - For example, `String`, `Integer`, user-defined classes, etc.
2. Interface
   - For example, collection interfaces such as `List`, `Set`, `Map`, etc.
3. Array
   - Can be an array of primitive data types or objects, such as `int[]`, `Integer[]`, `String[]`, etc.

### Examples

Here are some simple examples showing how to use these data types in Java:

```
// Using primitive data types
int myNumber = 10;
double myDouble = 5.99;
char myChar = 'A';
boolean myBoolean = true;

// Using reference data types
String myString = "Hello, World";
Integer myInteger = 100;
int[] myIntArray = {1, 2, 3, 4, 5};
String[] myStringArray = {"Hello", "World"};

// Using the ArrayList class (requires importing java.util package)
import java.util.ArrayList;
ArrayList<String> myList = new ArrayList<String>();
myList.add("Hello");
myList.add("World");

// Printing outputs
System.out.println(myNumber);
System.out.println(myDouble);
System.out.println(myChar);
System.out.println(myBoolean);
System.out.println(myString);
System.out.println(myInteger);
System.out.println(myIntArray[0]); // Accessing the first element of the array
System.out.println(myStringArray[1]); // Accessing the second element of the array
System.out.println(myList.get(0)); // Accessing the first element of the ArrayList

```

These examples demonstrate how to declare and initialize different types of variables, including both primitive and various reference data types. We hope this helps you better understand and use the different data types in Java.

Let's illustrate the differences between primitive and reference data types through some simple examples.

### Primitive Data Type Example

Assuming we have two `int` variables, here's how assignment works between primitive types and illustrates their independence post-assignment.

```
int x = 10; // Declare an int type variable x and assign it the value of 10
int y = x;  // Assign the value of x to y, y is now 10
y = 20;     // Change the value of y to 20

// At this point, the value of x is still 10, as y is a copy of x's value, and they do not affect each other
System.out.println("The value of x is: " + x); // Output: The value of x is: 10
System.out.println("The value of y is: " + y); // Output: The value of y is: 20

```

In this example, `x` and `y` are independent; changes to `y` do not affect `x`.

### Reference Data Type Example

Now, let's use a simple `Point` class to show how reference data types behave.

```
class Point {
    int x;
    int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

Point point1 = new Point(10, 20); // Create a Point object
Point point2 = point1;            // Assign the reference of point1 to point2

point2.x = 30; // Modify the value of x through point2

// At this point, both point1 and point2 point to the same object in heap memory, so modifications to the object affect both
System.out.println("The x value of point1 is: " + point1.x); // Output: The x value of point1 is: 30
System.out.println("The x value of point2 is: " + point2.x); // Output: The x value of point2 is: 30

```

In this example, `point1` and `point2` both point to the same `Point` object in heap memory. Thus, modifications through either variable are reflected in the other.

### Conclusion

- For primitive data types, each variable directly stores a specific value. Variable assignments are copies of values, so a change in one variable does not affect another.
- For reference data types, variables store references (memory addresses) to objects. Different variables can point to the same object in memory. Thus, modifications to the object through one variable are visible to any other variable pointing to that object.
