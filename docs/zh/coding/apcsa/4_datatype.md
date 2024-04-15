

# Java 中的数据结构

在Java中，数据类型分为两大类：原始数据类型（Primitive Data Types）和引用数据类型（Reference Data Types）。理解这两种类型之间的区别对于有效地使用Java非常重要。

### 原始数据类型（Primitive Data Types）

Java有八种基本数据类型，它们分别代表了常见的数字、字符和布尔值。这些类型占据固定的内存大小，并直接存储值。

1. **整数类型**
   - `byte`：8位，有符号。范围从-128到127。
   - `short`：16位，有符号。范围从-32,768到32,767。
   - `int`：32位，有符号。范围从-2^31到2^31-1。在Java中是最常用的整数类型。
   - `long`：64位，有符号。范围从-2^63到2^63-1。使用时后缀为L，如`123L`。
2. **浮点类型**
   - `float`：32位，IEEE 754标准。使用时后缀为F，如`123.4F`。
   - `double`：64位，IEEE 754标准。是Java中默认的小数类型。
3. **字符类型**
   - `char`：16位，Unicode字符。范围从`\u0000`（即0）到`\uffff`（即65,535）。
4. **布尔类型**
   - `boolean`：只有两个可能的值，`true`和`false`。不明确指定大小，但通常是1位。

### 引用数据类型（Reference Data Types）

引用类型指向内存中的一个对象或数组的地址。常见的引用数据类型包括类（Class）、接口（Interface）、数组（Array）等。

1. **类（Class）**
   - 例如，`String`、`Integer`、用户定义的任何类等。
2. **接口（Interface）**
   - 例如，`List`、`Set`、`Map`等集合接口。
3. **数组（Array）**
   - 可以是基本数据类型数组或对象数组，如`int[]`、`Integer[]`、`String[]`等。

### 举例

下面是一些简单的例子，展示如何在Java中使用这些数据类型：

```
javaCopy code
// 基本数据类型的使用
int myNumber = 10;
double myDouble = 5.99;
char myChar = 'A';
boolean myBoolean = true;

// 引用数据类型的使用
String myString = "Hello, World";
Integer myInteger = 100;
int[] myIntArray = {1, 2, 3, 4, 5};
String[] myStringArray = {"Hello", "World"};

// 使用ArrayList类（需要导入java.util包）
import java.util.ArrayList;
ArrayList<String> myList = new ArrayList<String>();
myList.add("Hello");
myList.add("World");

// 打印输出
System.out.println(myNumber);
System.out.println(myDouble);
System.out.println(myChar);
System.out.println(myBoolean);
System.out.println(myString);
System.out.println(myInteger);
System.out.println(myIntArray[0]); // 访问数组的第一个元素
System.out.println(myStringArray[1]); // 访问数组的第二个元素
System.out.println(myList.get(0)); // 访问ArrayList的第一个元素
```

在这些例子中，我们看到了如何声明和初始化不同类型的变量，包括基本数据类型和几种引用数据类型。希望这有助于您更好地理解和使用Java中的不同数据类型。

让我们通过一些简单的例子来说明原始数据类型和引用数据类型的区别。

### 原始数据类型的例子

假设我们有两个`int`变量，这里展示了如何在原始数据类型之间进行赋值操作，并说明了赋值后各自的独立性。

```
javaCopy code
int x = 10; // 声明一个int类型的变量x，并赋值为10
int y = x;  // 将x的值赋给y，y现在也是10
y = 20;     // 修改y的值为20

// 此时，x的值仍然是10，因为y是x值的一个副本，两者互不影响
System.out.println("x的值是: " + x); // 输出: x的值是: 10
System.out.println("y的值是: " + y); // 输出: y的值是: 20
```

在这个例子中，`x`和`y`是独立的，对`y`的修改不会影响到`x`。

### 引用数据类型的例子

现在，让我们使用一个简单的类`Point`来展示引用数据类型的行为。

```
javaCopy code
class Point {
    int x;
    int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

Point point1 = new Point(10, 20); // 创建一个Point对象
Point point2 = point1;            // 将point1的引用赋值给point2

point2.x = 30; // 通过point2修改x的值

// 此时，point1和point2都指向同一个对象，所以对该对象的修改会影响到两者
System.out.println("point1的x值是: " + point1.x); // 输出: point1的x值是: 30
System.out.println("point2的x值是: " + point2.x); // 输出: point2的x值是: 30
```

在这个例子中，`point1`和`point2`都指向堆内存中同一个`Point`对象的地址。因此，通过任一变量对对象的修改都会反映在另一个变量上。

### 结论

- 对于原始数据类型，每个变量都直接存储具体的值，变量之间的赋值操作是值的拷贝，因此一个变量的改变不会影响另一个变量。
- 对于引用数据类型，变量存储的是对象的引用（内存地址），不同变量可以指向内存中的同一个对象。因此，如果通过一个变量修改了对象，这种修改对于任何其他指向该对象的变量都是可见的。
