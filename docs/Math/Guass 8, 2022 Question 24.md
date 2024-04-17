# Guass 8, 2022 Question 24

![image-20240415225726417](/Users/yao/Library/Application Support/typora-user-images/image-20240415225726417.png)

```math
Step 1. Let's find some numbers have the property, then try to see if there is a patten.

	Group 1: 	110, 220, 330, ..., 990, there are 9 of this kind. 
	Group 2: 	112, 224, 336, 448, there are 4 of this kind.
	Group 3: 	123, 134, 145, ..., 189, there are 7 of this kind.
            235, 246, 257, 268, 279, there are 5 of this kind.
            246, 257, 269, there are 3.
            279, only 1. 
            In total: 1+3+5+7=16
            
Step 2. Take 1 from each Group, check how many different combinations
	
	Group1: take 110, all combinations: 110 and 101 only 2 different ways.
					since there are 9 of this kind, 9 * 2 = 18 
	Group2: take 112, all combinations: 112, 121, 211, 3 different ways.
					since there are 4 of this kind, 4 * 3 = 12 
	Group3: Take 123, all combinations: 123, 132, 213, 231, 312 and 321, 6 in total.
					So 16 * 6 = 96
					
Final Answer: 96 + 12 + 16 = 126
```

**这道题其实考察了两个方面的能力：1. 归纳总结，需要能够把所有的答案分为三组。2. 排列组合，Group1&2其实可以算成1组，都是三个数字排列组合，2个重复怎么计算，Group1稍微特殊了，因为有0的存在，所以少了1中。而Group3就是很简单的排列问题了。abc，有多少种排法。**

