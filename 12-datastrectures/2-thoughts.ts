
/**
 * ------ steps -------
 * **** understanding the problem ******
 * read the question and visualize in the mind
 * collect all the hints
 * understand examples in detail and constraints
 * write down examples(ling, short, single) along with constraints
 *
 * **** brutal force *******
 * explain the process
 * find edge cases
 * give time complexity
 * give the space complexity
 *
 * **** optimized solutions ****
 * observe the hints and explain optimized solution.
 * write pseudo code in detail
 * validate the code with examples(given example, else condition, single value, last value)
 * explain time complexity
 * explain the space complexity
 *
 * ***** models ****
 * convert to graphs
 *
 * **** while writing code ****
 * understand = usage if needed in conditional statements
 * think of edge cases, thing of single value
 *
 */

/**
 * ----- more practice -----
 * time and space complexities
 * writing conditions
 * data types
 */

//there is answer in the question
//take more example before write the logic
//understand the constructor, once instantiated, it should have all the info
//be careful in the loop of trying to access next values, could cause array index out of bound errors
//in numbers, we can access last digit with modulo
// remove the last number using division
//check for reduce the process of half
//remove unwanted variables
//consider all edge cases and write them down, check the examples and constraints
//read the question very carefully, find the hints, find all methods, understand the problem with examples too.
//if some operation is repeating, we can comeup with the alternative approch
//check the if conditional carefully
//explain through the time complexity
//if we do x+2 then it is linear time complexity, if we do x*2, this will be a log(x) complexity in the binary search
//work more on the if conditions
//more practice on if else and visualze the logic
//look for other solutions
//time complexity = log(m)*log(n)
//edge cases for 1 value and last value
// **** when convert 2d array in to 1d array, r = index/n; c= index%n;
// in mapping, if a is mapped to b, in some cases we need to make sure b is not mapped to any other key too.
// if the code has multiple of values in the loop, it might have a constraint to max out, so use long and check the range or other solutions
//for all the solutions of the hashmap, check if it is possible to reduse the soluctionto hashset
//in binary search, find a reason to reduce the search to half

//-----------------------nexted iteration, then potential solutions-----------------
/**
 * hashing
 * two pointes
 * sliding windlow
 * binary search
 * DP
 * running sum
 */

/**
 * running sum
 *
 *  _ _ _ _ _ _ _ _ _ _
 *  ---a-----
 *  -----------b-------
 *           ---(b-a)----
 *
 *
 * handle exception at the buginning
 */


/**
 * brue force
 * greedy approach
 * exastive approach
 */

/**
 * dinamic programming
 * 1. find the subproblems ==> find the repeating pattern, obeseve decision making criteria
 * 2. find the recursive relation ==> find the relation between the subproblems
 * 3. find the base case ==>
 * 4. find the order of the subproblems
 * 5. find the time complexity
 * 6. find the space complexity
 *
 */

/**
 * recursion function steps
 * 1. find the base case ==> find the return/exit condition
 * 2. find the recursive relation
 */

/**
 * consider all possible examples including edge cases, this helps writing pseudo code and evaluate if all conditions are covered
 * 
 * 1) half solved
 * 2) empty array
 * 3) single value
 * 4) last value
 * 5) first value
 * 6) find edge cases
 * 7) given example
 * 8) possible negation examples before writing any statement, think of the condition if it is possible that it might not happen
 */

/**
 * for better understanding, visualize if else condition as tow separate branches and then solve all conditions
 */

/**
 * for any condition, always think of example if it is possible that it might not happen?
 */


/**
 * Key criteria for picking your shape
 * | Criterion             | Array of tuples                  | Array of objects             | Object (map)                                   |
| --------------------- | -------------------------------- | ---------------------------- | ---------------------------------------------- |
| **Ordering matters**  | ✅ preserves order                | ✅ preserves order            | 🚫 not guaranteed (unless you use `Map`)       |
| **Homogeneous data**  | ✅ e.g. matrix, coordinates       | possible but verbose         | ✅ if you need fast key lookup                  |
| **Named fields**      | ❌ you need to remember positions | ✅ each record self-describes | ❌ must look up nested keys                     |
| **Fast index lookup** | ✅ O(1) by numeric index          | ✅ O(1) by index              | 🚫 you’d have to convert keys to array indices |
| **Fast key lookup**   | 🚫 linear scan                   | 🚫 linear scan               | ✅ O(1) by property name                        |
| **Extensible schema** | ❌ awkward to add fields          | ✅ just add a new property    | ❌ harder to standardize shapes                 |

Fixed Lookup Table (tuple list)
 */
const map = [
    [1000, "M"], [900, "CM"],
    // …  
    [1,    "I"]
  ];

// Collection of records (list of objects)

[
    { id: "u123", name: "Alice", roles: ["admin"], lastSeen: 1684100000000 },
    { id: "u456", name: "Bob",   roles: ["user"],  lastSeen: 1684200000000 },
    // …
  ]
  // –> each entry carries its own named fields; easy filtering/sorting.
  
// Keyed lookup (object as map)
const productsBySku = {
    "SKU-001": { price: 9.99, stock: 120 },
    "SKU-002": { price: 5.49, stock: 300 },
    // …
  };
  // –> super‐fast property access when you know the key upfront.
  