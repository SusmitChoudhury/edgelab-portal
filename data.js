// data.js
// Centralized Database for EdgeLab Educational Portal

const siteData = {
    // Array of your YouTube videos and associated study materials
    videos: [
        {
            id: 1,
            title: "I Built a FULL AI Website Without Writing a Single Line of Code 🤯 | Gemini + Antigravity + Sarvam AI",
            youtubeId: "O3t3AiOZgjw", 
            thumbnail: "https://img.youtube.com/vi/O3t3AiOZgjw/maxresdefault.jpg",
            description: "Learn how to build a complete, stunning AI website entirely through prompt engineering and no-code tools. Perfect for beginners and advanced developers alike.",
            materials: [
                {
                    name: "No code AI Website Notes (PDF)",
                    fileName: "No code AI Website.pdf.pdf",
                    type: "pdf"
                }
            ]
        }
    ],

    // Array of coding questions
    questions: [
        {
                "id": 1,
                "title": "Print a literal string to standard output",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/py-hello-world/problem"
        },
        {
                "id": 2,
                "title": "Calculate the sum of two integers directly",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/solve-me-first/problem"
        },
        {
                "id": 3,
                "title": "Compute the sum of a basic numerical array",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/simple-array-sum/problem"
        },
        {
                "id": 4,
                "title": "Compare elements of two arrays returning a score tuple",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/compare-the-triplets/problem"
        },
        {
                "id": 5,
                "title": "Output dynamic formatting using loop variables",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/python-print/problem"
        },
        {
                "id": 6,
                "title": "Process a massive sum bypassing integer limits",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/a-very-big-sum/problem"
        },
        {
                "id": 7,
                "title": "Calculate the absolute diagonal difference of a matrix",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/diagonal-difference/problem"
        },
        {
                "id": 8,
                "title": "Format decimal outputs evaluating array ratios",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/plus-minus/problem"
        },
        {
                "id": 9,
                "title": "Print a visual staircase using basic output commands",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/staircase/problem"
        },
        {
                "id": 10,
                "title": "Find the highest and lowest combinations of arrays",
                "difficulty": "Easy",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/mini-max-sum/problem"
        },
        {
                "id": 11,
                "title": "Convert time formats parsing string outputs",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/time-conversion/problem"
        },
        {
                "id": 12,
                "title": "Execute logic determining standard leap year conditions",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/write-a-function/problem"
        },
        {
                "id": 13,
                "title": "Dynamically evaluate an executing Python polynomial string",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/python-eval/problem"
        },
        {
                "id": 14,
                "title": "Round grades based on mathematical thresholds",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/grading/problem"
        },
        {
                "id": 15,
                "title": "Calculate coordinates of objects falling on a 1D line",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/apple-and-orange/problem"
        },
        {
                "id": 16,
                "title": "Evaluate velocity vectors for intersecting paths",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/kangaroo/problem"
        },
        {
                "id": 17,
                "title": "Find integers bounded cleanly between two given arrays",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/between-two-sets/problem"
        },
        {
                "id": 18,
                "title": "Track maximum and minimum threshold breaches iteratively",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem"
        },
        {
                "id": 19,
                "title": "Calculate contiguous segments matching length criteria",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/the-birthday-bar/problem"
        },
        {
                "id": 20,
                "title": "Count divisible pairs combining array elements",
                "difficulty": "Medium",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/divisible-sum-pairs/problem"
        },
        {
                "id": 21,
                "title": "Maximize taxi pickups navigating a blocked matrix grid",
                "difficulty": "Hard",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/maximum-passengers/problem"
        },
        {
                "id": 22,
                "title": "Formulate magic squares calculating absolute topological costs",
                "difficulty": "Hard",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/magic-square-forming/problem"
        },
        {
                "id": 23,
                "title": "Minimize overlapping radii covering a 1D coordinate system",
                "difficulty": "Hard",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/minimum-street-lights/problem"
        },
        {
                "id": 24,
                "title": "Maximize scheduling returns utilizing weighted interval tracking",
                "difficulty": "Hard",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/maximize-earnings/problem"
        },
        {
                "id": 25,
                "title": "Calculate constrained permutations bounded by absolute rules",
                "difficulty": "Hard",
                "category": "1. Introduction to Programming",
                "link": "https://www.hackerrank.com/challenges/absolute-permutation/problem"
        },
        {
                "id": 26,
                "title": "Process variables executing distinct integer and float division",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/python-division/problem"
        },
        {
                "id": 27,
                "title": "Read dynamic inputs mapping distinct elementary data types",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/c-tutorial-basic-data-types/problem"
        },
        {
                "id": 28,
                "title": "Retrieve formatted floating point averages from dictionaries",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/finding-the-percentage/problem"
        },
        {
                "id": 29,
                "title": "Instantiate and format variables representing complex coordinates",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/polar-coordinates/problem"
        },
        {
                "id": 30,
                "title": "Swap boolean upper and lower case flag statuses in strings",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/swap-case/problem"
        },
        {
                "id": 31,
                "title": "Validate explicitly if a string resolves to a float data type",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/detect-floating-point-number/problem"
        },
        {
                "id": 32,
                "title": "Use large memory blocks calculating arbitrarily huge integer powers",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/python-integers-come-in-all-sizes/problem"
        },
        {
                "id": 33,
                "title": "Evaluate array components converting logic into boolean outputs",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/any-or-all/problem"
        },
        {
                "id": 34,
                "title": "Format integers into binary, octal, and hexadecimal strings",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/python-string-formatting/problem"
        },
        {
                "id": 35,
                "title": "Merge separate data type iterables cleanly into variable structures",
                "difficulty": "Easy",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/zipped/problem"
        },
        {
                "id": 36,
                "title": "Group identical types into discrete counting variables",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/compress-the-string/problem"
        },
        {
                "id": 37,
                "title": "Manage nested floating point values within list containers",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/nested-list/problem"
        },
        {
                "id": 38,
                "title": "Parse absolute seconds from variables denoting string timestamps",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/python-time-delta/problem"
        },
        {
                "id": 39,
                "title": "Handle execution streams passing variables explicitly to integer exceptions",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/exceptions/problem"
        },
        {
                "id": 40,
                "title": "Filter valid strings storing complex configurations in variables",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/validate-list-of-email-address-with-filter/problem"
        },
        {
                "id": 41,
                "title": "Transform fractional data objects passing them to mathematical reducers",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/reduce-function/problem"
        },
        {
                "id": 42,
                "title": "Manage customized variables using object-oriented complex number classes",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/class-1-dealing-with-complex-numbers/problem"
        },
        {
                "id": 43,
                "title": "Perform vector arithmetic utilizing highly specific float inputs",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/class-2-find-the-torsional-angle/problem"
        },
        {
                "id": 44,
                "title": "Identify digits filtering strings representing unique phone variables",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/validating-the-phone-number/problem"
        },
        {
                "id": 45,
                "title": "Process variable attributes matching discrete identification criteria",
                "difficulty": "Medium",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/validating-uid/problem"
        },
        {
                "id": 46,
                "title": "Create matrix classes handling variable transformations cleanly",
                "difficulty": "Hard",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/matrix-script/problem"
        },
        {
                "id": 47,
                "title": "Decode highly nested node structures calculating internal float variables",
                "difficulty": "Hard",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/xml-1-find-the-score/problem"
        },
        {
                "id": 48,
                "title": "Extract maximum integer attributes deeply buried in XML types",
                "difficulty": "Hard",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/xml2-find-the-maximum-depth/problem"
        },
        {
                "id": 49,
                "title": "Compute complex dot products handling distinct list variable inputs",
                "difficulty": "Hard",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/maximize-it/problem"
        },
        {
                "id": 50,
                "title": "Standardize raw data parsing string variants sequentially",
                "difficulty": "Hard",
                "category": "2. Variables & Data Types",
                "link": "https://www.hackerrank.com/challenges/standardize-mobile-number-using-decorators/problem"
        },
        {
                "id": 51,
                "title": "Print output of fundamental addition, subtraction, and multiplication",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/python-arithmetic-operators/problem"
        },
        {
                "id": 52,
                "title": "Combine integer division and modulo natively executing built-in commands",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/python-mod-divmod/problem"
        },
        {
                "id": 53,
                "title": "Evaluate power operations generating bounded mathematical moduli natively",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/python-power-mod-power/problem"
        },
        {
                "id": 54,
                "title": "Calculate gross costs aggregating fixed arithmetic percentage operators",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/30-operators/problem"
        },
        {
                "id": 55,
                "title": "Maximize integer properties extracting subset values via bitwise AND",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/30-bitwise-and/problem"
        },
        {
                "id": 56,
                "title": "Identify matching array pairs summing inputs checking bounds operationally",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/simple-array-sum/problem"
        },
        {
                "id": 57,
                "title": "Locate runner-up limits parsing array bounds utilizing comparison logic",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem"
        },
        {
                "id": 58,
                "title": "Concatenate sequential characters assigning variables to updated targets",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/python-string-split-and-join/problem"
        },
        {
                "id": 59,
                "title": "Combine iterables mapping states comparing lengths maintaining outputs",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/mini-max-sum/problem"
        },
        {
                "id": 60,
                "title": "Track subset overlap extracting distinct values parsing intersection operators",
                "difficulty": "Easy",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/py-set-union/problem"
        },
        {
                "id": 61,
                "title": "Ascertain target combinations navigating vectors summing elements operably",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/sherlock-and-array/problem"
        },
        {
                "id": 62,
                "title": "Compute geometrical sequence aggregations utilizing massive base operators",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/summing-the-n-series/problem"
        },
        {
                "id": 63,
                "title": "Maximize arithmetic formulas extracting integer combinations using factorials",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/extra-long-factorials/problem"
        },
        {
                "id": 64,
                "title": "Assign properties recursively tracking values via bitwise XOR parameters",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/dynamic-array/problem"
        },
        {
                "id": 65,
                "title": "Locate non-matching single numbers parsing boundaries via exclusive OR",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/lonely-integer/problem"
        },
        {
                "id": 66,
                "title": "Aggregate arrays identifying maximum outputs bounding bitwise elements cleanly",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/maximizing-xor/problem"
        },
        {
                "id": 67,
                "title": "Manipulate base binaries toggling bits flipping sequences via bitwise NOT",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/flipping-bits/problem"
        },
        {
                "id": 68,
                "title": "Identify properties checking values counting maximum properties evaluating XORs",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/the-great-xor/problem"
        },
        {
                "id": 69,
                "title": "Test numerical limits validating game progression bounding power operators",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/counter-game/problem"
        },
        {
                "id": 70,
                "title": "Measure bounds tracking 2D paths calculating absolute subtraction",
                "difficulty": "Medium",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/diagonal-difference/problem"
        },
        {
                "id": 71,
                "title": "Use complex bitwise operations resolving properties managing AND combinations",
                "difficulty": "Hard",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/and-product/problem"
        },
        {
                "id": 72,
                "title": "Aggregate multi-node configurations passing inputs processing XOR boundaries",
                "difficulty": "Hard",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/xor-sequence/problem"
        },
        {
                "id": 73,
                "title": "Process array queries assigning operational states manipulating variables natively",
                "difficulty": "Hard",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/crush/problem"
        },
        {
                "id": 74,
                "title": "Traverse massive trees assigning heavy topological bounds algorithmically",
                "difficulty": "Hard",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/heavy-light-white-falcon/problem"
        },
        {
                "id": 75,
                "title": "Formulate configurations extracting instances checking permutations avoiding limits directly",
                "difficulty": "Hard",
                "category": "3. Operators",
                "link": "https://www.hackerrank.com/challenges/morgan-and-a-string/problem"
        },
        {
                "id": 76,
                "title": "Accept strings formatting sequences combining inputs into standard text",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/whats-your-name/problem"
        },
        {
                "id": 77,
                "title": "Read logic validating evaluation limits extracting parameters cleanly",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/input/problem"
        },
        {
                "id": 78,
                "title": "Ingest line strings mapping discrete items directly to target objects",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/map-and-lambda-expression/problem"
        },
        {
                "id": 79,
                "title": "Read base limits assigning sequence bounds measuring iterations properly",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/python-loops/problem"
        },
        {
                "id": 80,
                "title": "Process parameters passing dynamic arrays mapping coordinates clearly",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/nested-list/problem"
        },
        {
                "id": 81,
                "title": "Load string subsets measuring dimensions validating configurations cleanly",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/arrays-ds/problem"
        },
        {
                "id": 82,
                "title": "Process character queries validating properties filtering natively successfully",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/python-mutations/problem"
        },
        {
                "id": 83,
                "title": "Input limits processing comprehensions configuring elements deeply dynamically",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/list-comprehensions/problem"
        },
        {
                "id": 84,
                "title": "Ingest separated inputs managing bounds computing output sequences natively",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/python-arithmetic-operators/problem"
        },
        {
                "id": 85,
                "title": "Load specific sequences identifying components executing string print functions",
                "difficulty": "Easy",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/python-print/problem"
        },
        {
                "id": 86,
                "title": "Traverse multi-line elements checking inputs validating regex splits",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/re-split/problem"
        },
        {
                "id": 87,
                "title": "Read documents extracting sequences finding targets processing HTML strictly",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/html-parser-part-1/problem"
        },
        {
                "id": 88,
                "title": "Ingest multi-line text parameters executing configurations locating data deeply",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/html-parser-part-2/problem"
        },
        {
                "id": 89,
                "title": "Analyze attributes defining paths passing target bounds input streams cleanly",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/detect-html-tags-attributes-and-attribute-values/problem"
        },
        {
                "id": 90,
                "title": "Parse grid bounds passing instances validating topological inputs safely",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/the-grid-search/problem"
        },
        {
                "id": 91,
                "title": "Load massive parameter boundaries routing configurations parsing arrays quickly",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/quicksort3/problem"
        },
        {
                "id": 92,
                "title": "Manage node connections aggregating boundaries loading data continuously properly",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/journey-to-the-moon/problem"
        },
        {
                "id": 93,
                "title": "Consume topological limits routing conditions filtering node inputs natively",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/tree-huffman-decoding/problem"
        },
        {
                "id": 94,
                "title": "Load geometric obstacles checking locations generating matrix components safely",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/queens-attack-2/problem"
        },
        {
                "id": 95,
                "title": "Parse multi-line strings defining attributes identifying formatted color codes",
                "difficulty": "Medium",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/hex-color-code/problem"
        },
        {
                "id": 96,
                "title": "Load matrices passing constraints filtering specific output combinations natively",
                "difficulty": "Hard",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/matrix-script/problem"
        },
        {
                "id": 97,
                "title": "Read fast continuous query commands traversing topological components perfectly",
                "difficulty": "Hard",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/crush/problem"
        },
        {
                "id": 98,
                "title": "Parse massive elements mapping subsets reading sequential parameters deeply",
                "difficulty": "Hard",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/poisonous-plants/problem"
        },
        {
                "id": 99,
                "title": "Ingest text variables formatting combinations creating configurations checking clearly",
                "difficulty": "Hard",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/regex-substitution/problem"
        },
        {
                "id": 100,
                "title": "Rapid STDIN processing identifying subsets executing arrays reliably",
                "difficulty": "Hard",
                "category": "4. User Input",
                "link": "https://www.hackerrank.com/challenges/maxsubarray/problem"
        },
        {
                "id": 101,
                "title": "Filter input ranges returning outputs validating inclusive and exclusive checks",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/py-if-else/problem"
        },
        {
                "id": 102,
                "title": "Check chronological logic bounding properties validating conditions mathematically",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/write-a-function/problem"
        },
        {
                "id": 103,
                "title": "Evaluate logic tracking parameters configuring outputs routing components properly",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/30-conditional-statements/problem"
        },
        {
                "id": 104,
                "title": "Measure constraints assigning vectors checking variables returning exact counts",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/birthday-cake-candles/problem"
        },
        {
                "id": 105,
                "title": "Validate sequences calculating subset overlap parsing parameters analyzing bounds",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/py-check-subset/problem"
        },
        {
                "id": 106,
                "title": "Verify strict inclusion mapping structures returning logical boolean matrices",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/py-check-strict-superset/problem"
        },
        {
                "id": 107,
                "title": "Filter attributes determining sequences iterating deeply generating boolean flags",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/string-validators/problem"
        },
        {
                "id": 108,
                "title": "Format standard strings mapping logic validating formatting configurations directly",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/validate-list-of-email-address-with-filter/problem"
        },
        {
                "id": 109,
                "title": "Match constraints processing elements identifying variables filtering natively securely",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/lonely-integer/problem"
        },
        {
                "id": 110,
                "title": "Establish targets configuring parameters evaluating vectors evaluating limits successfully",
                "difficulty": "Easy",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/the-hurdle-race/problem"
        },
        {
                "id": 111,
                "title": "Employ branches finding configurations mapping limits checking numeric conditions",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/detect-floating-point-number/problem"
        },
        {
                "id": 112,
                "title": "Process logic finding ranking limits traversing lists avoiding deeply nested blocks",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem"
        },
        {
                "id": 113,
                "title": "Handle overlapping structures configuring bounds evaluating geometric translations locally",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/encryption/problem"
        },
        {
                "id": 114,
                "title": "Match constraints defining sequences managing absolute condition bounds optimally",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/absolute-permutation/problem"
        },
        {
                "id": 115,
                "title": "Parse targets checking variables configuring modulo restrictions routing properly",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/non-divisible-subset/problem"
        },
        {
                "id": 116,
                "title": "Determine conditions passing combinations identifying substrings modifying correctly",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/regex-substitution/problem"
        },
        {
                "id": 117,
                "title": "Calculate grid points assessing logic branches determining absolute collisions cleanly",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/queens-attack-2/problem"
        },
        {
                "id": 118,
                "title": "Apply sequence limits formatting structures checking states validating grids perfectly",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/bomber-man/problem"
        },
        {
                "id": 119,
                "title": "Route calculations defining logic resolving time limits comparing parameters successfully",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/day-of-the-programmer/problem"
        },
        {
                "id": 120,
                "title": "Analyze grid targets formatting elements analyzing combinations routing conditions natively",
                "difficulty": "Medium",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/two-pluses/problem"
        },
        {
                "id": 121,
                "title": "Validate parameters executing combinations assessing complex subsegment sorting bounds",
                "difficulty": "Hard",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/almost-sorted/problem"
        },
        {
                "id": 122,
                "title": "Maximize limits determining configurations assessing logic paths bypassing if loops",
                "difficulty": "Hard",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/matrix-script/problem"
        },
        {
                "id": 123,
                "title": "Resolve logic managing array swaps calculating conditions sorting topologically safely",
                "difficulty": "Hard",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/larrys-array/problem"
        },
        {
                "id": 124,
                "title": "Construct subsegments validating string limits filtering paths generating backtracking limits",
                "difficulty": "Hard",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/password-cracker/problem"
        },
        {
                "id": 125,
                "title": "Identify node networks mapping parameters identifying subsets processing connections actively",
                "difficulty": "Hard",
                "category": "5. Conditional Statements",
                "link": "https://www.hackerrank.com/challenges/dijkstrashortreach/problem"
        },
        {
                "id": 126,
                "title": "Execute append, sort, pop, and reverse sequence operations systematically",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/python-lists/problem"
        },
        {
                "id": 127,
                "title": "Generate Cartesian permutations filtering configurations efficiently within lists",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/list-comprehensions/problem"
        },
        {
                "id": 128,
                "title": "Identify matching arrays mapping conditions tracking targets analyzing dynamically",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem"
        },
        {
                "id": 129,
                "title": "Measure arrays extracting subsets defining outputs finding minimum variables natively",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/nested-list/problem"
        },
        {
                "id": 130,
                "title": "Process rotations mapping components tracking boundaries filtering deeply correctly",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/array-left-rotation/problem"
        },
        {
                "id": 131,
                "title": "Calculate arrays extracting outputs generating arrays navigating parameters sequentially",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/arrays-ds/problem"
        },
        {
                "id": 132,
                "title": "Traverse logic isolating targets parsing attributes summing data points perfectly",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/simple-array-sum/problem"
        },
        {
                "id": 133,
                "title": "Modify specific bounds checking lists resolving configurations traversing elements natively",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/itertools-combinations/problem"
        },
        {
                "id": 134,
                "title": "Extract subsets parsing sequences counting objects returning outputs dynamically",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/30-sorting/problem"
        },
        {
                "id": 135,
                "title": "Determine valid bounds resolving arrays determining matches tracking parameters effectively",
                "difficulty": "Easy",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/kangaroo/problem"
        },
        {
                "id": 136,
                "title": "Match limits configuring logic identifying instances tracking elements processing loops",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/sparse-arrays/problem"
        },
        {
                "id": 137,
                "title": "Determine optimal ranking elements tracking array sorting mechanics navigating safely",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/minimum-swaps-2/problem"
        },
        {
                "id": 138,
                "title": "Parse continuous parameters filtering configurations tracking objects navigating locally",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/minimum-distances/problem"
        },
        {
                "id": 139,
                "title": "Implement structures formatting queries dynamically executing sequences natively accurately",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/dynamic-array/problem"
        },
        {
                "id": 140,
                "title": "Aggregate outputs computing specific values measuring variables extracting matrices effectively",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/matrix-rotation-algo/problem"
        },
        {
                "id": 141,
                "title": "Establish targets extracting limits parsing arrays validating geometry processing arrays",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/2d-array/problem"
        },
        {
                "id": 142,
                "title": "Ascertain sequence matching arrays sorting attributes checking numeric types directly",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/big-sorting/problem"
        },
        {
                "id": 143,
                "title": "Evaluate vectors extracting components aggregating max conditions checking structures deeply",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/max-array-sum/problem"
        },
        {
                "id": 144,
                "title": "Manage outputs validating arrays maintaining complex query frequencies evaluating structurally",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/frequency-queries/problem"
        },
        {
                "id": 145,
                "title": "Check valid configurations filtering limits tracking iterations modifying parameters perfectly",
                "difficulty": "Medium",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/new-year-chaos/problem"
        },
        {
                "id": 146,
                "title": "Create logic defining limits evaluating variables mapping array offsets safely",
                "difficulty": "Hard",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/crush/problem"
        },
        {
                "id": 147,
                "title": "Parse attributes evaluating dimensions formatting nested matrices identifying rotations strictly",
                "difficulty": "Hard",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/matrix-rotation-algo/problem"
        },
        {
                "id": 148,
                "title": "Maximize limits structuring bounds creating targets assessing array volumes accurately",
                "difficulty": "Hard",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/largest-rectangle/problem"
        },
        {
                "id": 149,
                "title": "Establish max constraints tracking configurations defining inputs generating strings securely",
                "difficulty": "Hard",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/reverse-shuffle-merge/problem"
        },
        {
                "id": 150,
                "title": "Calculate outputs tracking loops extracting elements processing states recursively locally",
                "difficulty": "Hard",
                "category": "6. Lists (Arrays)",
                "link": "https://www.hackerrank.com/challenges/poisonous-plants/problem"
        },
        {
                "id": 151,
                "title": "Generate tuples instantiating hash properties natively computing values accurately",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/python-tuples/problem"
        },
        {
                "id": 152,
                "title": "Create logical maps organizing named tuples structuring arrays efficiently",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/py-collections-namedtuple/problem"
        },
        {
                "id": 153,
                "title": "Calculate iterations organizing permutations formatting tuples identifying subsets mathematically",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/itertools-product/problem"
        },
        {
                "id": 154,
                "title": "Check valid conditions extracting elements utilizing data tuples comparing limits natively",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem"
        },
        {
                "id": 155,
                "title": "Traverse strings counting specific variables finding overlaps navigating perfectly cleanly",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/text-alignment/problem"
        },
        {
                "id": 156,
                "title": "Modify specific permutations organizing limits formatting tuples updating properly locally",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/python-mutations/problem"
        },
        {
                "id": 157,
                "title": "Process configurations evaluating sequences mapping constraints iterating tuples actively securely",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/itertools-permutations/problem"
        },
        {
                "id": 158,
                "title": "Formulate vectors calculating elements organizing tuple tracking replacing functionally securely",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/itertools-combinations-with-replacement/problem"
        },
        {
                "id": 159,
                "title": "Compare elements matching logic generating combinations binding attributes safely properly",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/zipped/problem"
        },
        {
                "id": 160,
                "title": "Establish parameters checking instances parsing outputs managing subsets internally securely",
                "difficulty": "Easy",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/nested-list/problem"
        },
        {
                "id": 161,
                "title": "Ascertain continuous configurations aggregating sequences building data tuples parsing safely",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/compress-the-string/problem"
        },
        {
                "id": 162,
                "title": "Determine arrays creating outputs mapping tuple rules resolving limits locally",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/athlete-sort/problem"
        },
        {
                "id": 163,
                "title": "Filter instances checking outputs generating configurations managing sequences cleanly properly",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/word-order/problem"
        },
        {
                "id": 164,
                "title": "Extract sequences locating substrings defining elements tracking parameters actively strongly",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem"
        },
        {
                "id": 165,
                "title": "Calculate grid sequences tracking properties mapping limits defining variables strictly",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/encryption/problem"
        },
        {
                "id": 166,
                "title": "Parse geometric ranges organizing boundaries generating coordinates modeling tuples deeply",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/find-angle/problem"
        },
        {
                "id": 167,
                "title": "Track subset iterations mapping components processing rules defining strings functionally",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/company-logo/problem"
        },
        {
                "id": 168,
                "title": "Group configurations analyzing structures checking parameters organizing limits calculating functionally",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/python-time-delta/problem"
        },
        {
                "id": 169,
                "title": "Maintain outputs identifying instances determining properties evaluating sequences securely properly",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/py-collections-ordereddict/problem"
        },
        {
                "id": 170,
                "title": "Traverse multi-line limits resolving conditions navigating tuples modeling grids cleanly",
                "difficulty": "Medium",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/the-grid-search/problem"
        },
        {
                "id": 171,
                "title": "Maximize integer properties managing sequences processing outputs evaluating values perfectly",
                "difficulty": "Hard",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/maximize-it/problem"
        },
        {
                "id": 172,
                "title": "Identify node connections organizing variables generating topological paths identifying structurally",
                "difficulty": "Hard",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/dijkstrashortreach/problem"
        },
        {
                "id": 173,
                "title": "Evaluate geometric structures organizing variables calculating boundaries measuring components natively",
                "difficulty": "Hard",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/largest-rectangle/problem"
        },
        {
                "id": 174,
                "title": "Process array permutations parsing variables determining paths filtering combinations natively",
                "difficulty": "Hard",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/two-strings/problem"
        },
        {
                "id": 175,
                "title": "Solve specialized tracking defining bounds generating targets evaluating subsets deeply",
                "difficulty": "Hard",
                "category": "7. Tuples",
                "link": "https://www.hackerrank.com/challenges/poisonous-plants/problem"
        },
        {
                "id": 176,
                "title": "Filter subsets testing limits computing unique data processing variables sequentially",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-introduction-to-sets/problem"
        },
        {
                "id": 177,
                "title": "Add specific elements determining instances organizing components safely correctly efficiently",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-set-add/problem"
        },
        {
                "id": 178,
                "title": "Check chronological logic mutating sets dropping variables generating inputs cleanly",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-set-discard-remove-pop/problem"
        },
        {
                "id": 179,
                "title": "Merge discrete conditions passing configurations testing boundaries formatting unions locally",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-set-union/problem"
        },
        {
                "id": 180,
                "title": "Compare attributes locating occurrences identifying intersections tracking parameters securely successfully",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-set-intersection-operation/problem"
        },
        {
                "id": 181,
                "title": "Formulate logic mapping boundaries resolving combinations finding difference states securely",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-set-difference-operation/problem"
        },
        {
                "id": 182,
                "title": "Process configurations matching parameters verifying targets symmetric combinations completely",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-set-symmetric-difference-operation/problem"
        },
        {
                "id": 183,
                "title": "Aggregate variables traversing configurations extracting outputs modifying parameters deeply dynamically",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-set-mutations/problem"
        },
        {
                "id": 184,
                "title": "Read parameter instances organizing targets checking bounds resolving boolean outputs",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-check-subset/problem"
        },
        {
                "id": 185,
                "title": "Determine topologies defining constraints evaluating properties checking strict superset limits",
                "difficulty": "Easy",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-check-strict-superset/problem"
        },
        {
                "id": 186,
                "title": "Maximize boundaries testing limits comparing values determining boolean matches deeply",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/no-idea/problem"
        },
        {
                "id": 187,
                "title": "Ascertain sequence matching sets organizing boundaries resolving limits computing effectively",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/py-the-captains-room/problem"
        },
        {
                "id": 188,
                "title": "Define elements formatting configurations evaluating logic merging structures identifying perfectly",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/merge-the-tools/problem"
        },
        {
                "id": 189,
                "title": "Group limits organizing occurrences tracking configurations creating inputs determining locally",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/journey-to-the-moon/problem"
        },
        {
                "id": 190,
                "title": "Track combinations determining matches formatting overlaps filtering components comparing locally",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/two-strings/problem"
        },
        {
                "id": 191,
                "title": "Evaluate combinations processing components navigating topologies creating unique states perfectly",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/the-minion-game/problem"
        },
        {
                "id": 192,
                "title": "Calculate specific sets mapping values checking permutations filtering arrays natively",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/matrix-rotation-algo/problem"
        },
        {
                "id": 193,
                "title": "Validate characters computing loops missing parameters managing instances securely properly",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/missing-numbers/problem"
        },
        {
                "id": 194,
                "title": "Traverse sequences executing bounds organizing logic defining components mathematically locally",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/pairs/problem"
        },
        {
                "id": 195,
                "title": "Identify overlapping topological strings analyzing anagram parameters deeply tracking states",
                "difficulty": "Medium",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem"
        },
        {
                "id": 196,
                "title": "Create configurations mapping bounds sorting logic assessing combinatorial constraints natively",
                "difficulty": "Hard",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/maximize-it/problem"
        },
        {
                "id": 197,
                "title": "Manage variables resolving elements filtering arrays computing combinations filtering actively",
                "difficulty": "Hard",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/kruskalmstrsub/problem"
        },
        {
                "id": 198,
                "title": "Establish tracking constraints evaluating combinations identifying independent node network maps",
                "difficulty": "Hard",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/components-in-a-graph/problem"
        },
        {
                "id": 199,
                "title": "Aggregate strings identifying patterns processing permutations navigating constraints resolving subsets",
                "difficulty": "Hard",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/merging-communities/problem"
        },
        {
                "id": 200,
                "title": "Execute logic filtering bounds resolving arrays comparing topological strings optimally",
                "difficulty": "Hard",
                "category": "8. Sets",
                "link": "https://www.hackerrank.com/challenges/string-similarity/problem"
        },
        {
                "id": 201,
                "title": "Build logic grouping bounds extracting default indices structuring dicts cleanly",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/defaultdict-tutorial/problem"
        },
        {
                "id": 202,
                "title": "Measure variables tracking counts parsing limits evaluating outputs structuring effectively",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/collections-counter/problem"
        },
        {
                "id": 203,
                "title": "Track arrays managing lists comparing elements resolving limits safely internally",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem"
        },
        {
                "id": 204,
                "title": "Identify matching values evaluating elements determining limits extracting dynamically correctly",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/finding-the-percentage/problem"
        },
        {
                "id": 205,
                "title": "Filter structures testing components ordering variables building ordered maps safely",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/py-collections-ordereddict/problem"
        },
        {
                "id": 206,
                "title": "Determine overlapping objects configuring maps tracking parameters matching keys effectively",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/sock-merchant/problem"
        },
        {
                "id": 207,
                "title": "Modify mathematical conditions checking logic translating symbols executing bounds functionally",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/validating-roman-numerals/problem"
        },
        {
                "id": 208,
                "title": "Parse sequences resolving parameters returning maps comparing structures actively accurately",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/map-and-lambda-expression/problem"
        },
        {
                "id": 209,
                "title": "Output dynamic occurrences mapping topological heights generating key vectors cleanly",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/counting-valleys/problem"
        },
        {
                "id": 210,
                "title": "Traverse strings grouping objects finding constraints validating limits internally dynamically",
                "difficulty": "Easy",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/validating-uid/problem"
        },
        {
                "id": 211,
                "title": "Match constraints processing permutations finding keys modeling maps comparing safely",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/ctci-ransom-note/problem"
        },
        {
                "id": 212,
                "title": "Determine topological subsets parsing subsets measuring objects configuring structures perfectly",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/two-strings/problem"
        },
        {
                "id": 213,
                "title": "Construct strings maintaining parameters mapping states sorting configurations comparing actively",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem"
        },
        {
                "id": 214,
                "title": "Process logic finding limits processing tracking tracking keys formatting functionally",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/frequency-queries/problem"
        },
        {
                "id": 215,
                "title": "Sort strings matching character frequencies parsing values modeling elements perfectly",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/company-logo/problem"
        },
        {
                "id": 216,
                "title": "Manage tracking resolving components extracting instances ordering states deeply natively",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/word-order/problem"
        },
        {
                "id": 217,
                "title": "Cache recursive maps resolving values modeling parameters processing functionally effectively",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem"
        },
        {
                "id": 218,
                "title": "Execute calculations formatting structures tracking boundaries rotating conditions optimally safely",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/matrix-rotation-algo/problem"
        },
        {
                "id": 219,
                "title": "Filter inputs measuring keys determining fraudulent frequencies maintaining hashes effectively",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem"
        },
        {
                "id": 220,
                "title": "Calculate specific configurations analyzing matrices ranking structures defining bounds internally",
                "difficulty": "Medium",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem"
        },
        {
                "id": 221,
                "title": "Aggregate queries filtering values parsing tracking identifying triplets mapped algorithmically",
                "difficulty": "Hard",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/count-triplets-1/problem"
        },
        {
                "id": 222,
                "title": "Establish tracking constraints creating mappings tracking paths avoiding nested bounds",
                "difficulty": "Hard",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/dijkstrashortreach/problem"
        },
        {
                "id": 223,
                "title": "Formulate configurations organizing limits finding variables executing mapping logic structurally",
                "difficulty": "Hard",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/array-manipulation/problem"
        },
        {
                "id": 224,
                "title": "Locate character combinations defining matches mapping subsets constructing keys optimally",
                "difficulty": "Hard",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/build-a-palindrome/problem"
        },
        {
                "id": 225,
                "title": "Define values locating vectors assessing paths tracking subsets mapped correctly",
                "difficulty": "Hard",
                "category": "9. Dictionaries",
                "link": "https://www.hackerrank.com/challenges/maximum-subarray-sum/problem"
        },
        {
                "id": 226,
                "title": "Generate loops tracking boundaries squaring iterations parsing variables safely effectively",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/python-loops/problem"
        },
        {
                "id": 227,
                "title": "Iterate mathematical instances extracting loops mapping Cartesian components executing correctly",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/itertools-product/problem"
        },
        {
                "id": 228,
                "title": "Define configurations organizing bounds executing objects testing conditions safely sequentially",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/itertools-permutations/problem"
        },
        {
                "id": 229,
                "title": "Extract subsets calculating boundaries executing bounds parsing combinations formatting optimally",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/itertools-combinations/problem"
        },
        {
                "id": 230,
                "title": "Traverse strings defining patterns matching bounds testing configurations executing dynamically",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/find-a-string/problem"
        },
        {
                "id": 231,
                "title": "Sort standard arrays sorting elements searching logic traversing outputs functionally",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem"
        },
        {
                "id": 232,
                "title": "Modify structures tracking parameters mutating variables assigning logic executing internally",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/python-mutations/problem"
        },
        {
                "id": 233,
                "title": "Compare variables analyzing occurrences formatting values outputting limits cleanly securely",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/python-print/problem"
        },
        {
                "id": 234,
                "title": "Validate logic processing booleans checking parameters organizing tests sequentially clearly",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/string-validators/problem"
        },
        {
                "id": 235,
                "title": "Create logical maps organizing limits modeling variables outputting blocks properly",
                "difficulty": "Easy",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/staircase/problem"
        },
        {
                "id": 236,
                "title": "Process logic defining structures measuring bounds sorting arrays traversing cleanly",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/the-grid-search/problem"
        },
        {
                "id": 237,
                "title": "Filter instances parsing components extracting logic navigating substrings optimally structurally",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/merge-the-tools/problem"
        },
        {
                "id": 238,
                "title": "Determine topological subsets processing variables checking states iterating logic deeply",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/iterables-and-iterators/problem"
        },
        {
                "id": 239,
                "title": "Identify nested parameters finding elements checking structures grouping limits completely",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/compress-the-string/problem"
        },
        {
                "id": 240,
                "title": "Evaluate combinations tracking specific boundaries tracking points tracking logic correctly",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/the-minion-game/problem"
        },
        {
                "id": 241,
                "title": "Manage logic tracking boundaries evaluating arrays identifying piles sorting effectively",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/piling-up/problem"
        },
        {
                "id": 242,
                "title": "Parse arrays evaluating logic tracking targets calculating constraints generating properly",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/nested-list/problem"
        },
        {
                "id": 243,
                "title": "Aggregate values defining conditions calculating geometric parameters parsing structurally optimally",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/triangle-quest-2/problem"
        },
        {
                "id": 244,
                "title": "Measure variables modifying attributes navigating strings mapping paths tracking successfully",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/ginorts/problem"
        },
        {
                "id": 245,
                "title": "Check valid elements executing matrices navigating paths parsing loops dynamically",
                "difficulty": "Medium",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/magic-square-forming/problem"
        },
        {
                "id": 246,
                "title": "Maximize functions calculating limits passing parameters parsing inputs extracting efficiently",
                "difficulty": "Hard",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/maximize-it/problem"
        },
        {
                "id": 247,
                "title": "Process arrays filtering matrices calculating conditions bypassing standard loops flawlessly",
                "difficulty": "Hard",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/matrix-script/problem"
        },
        {
                "id": 248,
                "title": "Construct subsegments validating limits formatting outputs determining loops defining structurally",
                "difficulty": "Hard",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/matrix-rotation-algo/problem"
        },
        {
                "id": 249,
                "title": "Navigate arrays defining limits mapping logic tracking inputs identifying deeply",
                "difficulty": "Hard",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/password-cracker/problem"
        },
        {
                "id": 250,
                "title": "Find constraints processing outputs calculating points grouping states measuring accurately",
                "difficulty": "Hard",
                "category": "10. Loops",
                "link": "https://www.hackerrank.com/challenges/largest-rectangle/problem"
        },
        {
                "id": 251,
                "title": "Evaluate logic tracking configurations verifying boolean boundaries encapsulating functions optimally",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/write-a-function/problem"
        },
        {
                "id": 252,
                "title": "Check valid functions modifying states checking lambdas formatting cleanly explicitly",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/map-and-lambda-expression/problem"
        },
        {
                "id": 253,
                "title": "Manage variables navigating variables checking boolean aggregations determining limits internally",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/any-or-all/problem"
        },
        {
                "id": 254,
                "title": "Aggregate logic navigating targets mapping states sorting limits securely functionally",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/athlete-sort/problem"
        },
        {
                "id": 255,
                "title": "Determine overlapping subsets calculating elements modifying math structures tracking dynamically",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/python-mod-divmod/problem"
        },
        {
                "id": 256,
                "title": "Parse structures formatting logic testing bounds tracking inputs outputting securely",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/find-a-string/problem"
        },
        {
                "id": 257,
                "title": "Filter specific attributes determining instances executing blocks throwing targets functionally",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/exceptions/problem"
        },
        {
                "id": 258,
                "title": "Construct strings maintaining logic finding constraints resolving logic translating properly",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/swap-case/problem"
        },
        {
                "id": 259,
                "title": "Build vectors formatting targets outputting inputs parsing configurations mapping properly",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/python-string-formatting/problem"
        },
        {
                "id": 260,
                "title": "Define strings executing inputs creating bounds processing states filtering deeply",
                "difficulty": "Easy",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/python-string-split-and-join/problem"
        },
        {
                "id": 261,
                "title": "Compare elements analyzing components organizing constraints parsing tracking filtering actively",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/compress-the-string/problem"
        },
        {
                "id": 262,
                "title": "Organize combinations grouping bounds defining constraints verifying states mapping cleanly",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/validate-list-of-email-address-with-filter/problem"
        },
        {
                "id": 263,
                "title": "Read sequences mapping subsets filtering inputs multiplying arrays mathematically correctly",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/reduce-function/problem"
        },
        {
                "id": 264,
                "title": "Extract parameters identifying combinations checking inputs handling structures parsing optimally",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/standardize-mobile-number-using-decorators/problem"
        },
        {
                "id": 265,
                "title": "Traverse multidimensional arrays sorting logic finding variables passing parameters securely",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/name-directory/problem"
        },
        {
                "id": 266,
                "title": "Validate arrays organizing constraints finding logic modifying games structurally properly",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/the-minion-game/problem"
        },
        {
                "id": 267,
                "title": "Process character matching resolving keys modifying subsets measuring components actively",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/merge-the-tools/problem"
        },
        {
                "id": 268,
                "title": "Evaluate combinations tracking specific variables identifying geometric angles returning limits",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/find-angle/problem"
        },
        {
                "id": 269,
                "title": "Output specific paths locating occurrences identifying points computing objects securely",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/python-time-delta/problem"
        },
        {
                "id": 270,
                "title": "Group target vectors grouping components returning dictionaries modeling constraints effectively",
                "difficulty": "Medium",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/word-order/problem"
        },
        {
                "id": 271,
                "title": "Maximize numeric states verifying components comparing limits mapping dynamically natively",
                "difficulty": "Hard",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/maximize-it/problem"
        },
        {
                "id": 272,
                "title": "Resolve logic managing array components matching keys filtering safely recursively",
                "difficulty": "Hard",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/matrix-script/problem"
        },
        {
                "id": 273,
                "title": "Identify network logic finding targets executing elements maintaining arrays internally",
                "difficulty": "Hard",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/dijkstrashortreach/problem"
        },
        {
                "id": 274,
                "title": "Assess node relationships testing boundaries returning states building components actively",
                "difficulty": "Hard",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/array-manipulation/problem"
        },
        {
                "id": 275,
                "title": "Create instances parsing targets processing validation checking expressions tracking structurally",
                "difficulty": "Hard",
                "category": "11. Functions",
                "link": "https://www.hackerrank.com/challenges/validating-postalcode/problem"
        },
        {
                "id": 276,
                "title": "Maximize recursive depth tracing occurrences calculating factorials properly tracking sequences",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/30-recursion/problem"
        },
        {
                "id": 277,
                "title": "Analyze coordinates mapping dependencies validating recursion computing sequences generating cleanly",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem"
        },
        {
                "id": 278,
                "title": "Identify matching instances evaluating properties calculating bounds recursing structurally clearly",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/simple-array-sum/problem"
        },
        {
                "id": 279,
                "title": "Filter limits parsing loops assessing distances computing paths managing limits",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/kangaroo/problem"
        },
        {
                "id": 280,
                "title": "Manage node tracking evaluating branches calculating depths finding bounds natively",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem"
        },
        {
                "id": 281,
                "title": "Evaluate arrays checking values tracking combinations dividing elements comparing cleanly",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/quicksort1/problem"
        },
        {
                "id": 282,
                "title": "Track combinations measuring vectors building limits calculating variables testing effectively",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/compare-the-triplets/problem"
        },
        {
                "id": 283,
                "title": "Compare attributes locating occurrences identifying components formatting safely mapping sequentially",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/string-validators/problem"
        },
        {
                "id": 284,
                "title": "Parse logical subsets generating iterations calculating logic computing targets recursively",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/python-print/problem"
        },
        {
                "id": 285,
                "title": "Build vectors formatting logic organizing elements identifying subcomponents comparing actively",
                "difficulty": "Easy",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/find-a-string/problem"
        },
        {
                "id": 286,
                "title": "Determine combinatorics maintaining tracking verifying logic checking super digit paths",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/recursive-digit-sum/problem"
        },
        {
                "id": 287,
                "title": "Resolve topological trees tracking subsets analyzing overlaps managing limits securely",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem"
        },
        {
                "id": 288,
                "title": "Construct subsets passing logic processing conditions determining sums mapping fully",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/the-power-sum/problem"
        },
        {
                "id": 289,
                "title": "Extract elements mapping bounds testing subsets validating matrices computing securely",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/crossword-puzzle/problem"
        },
        {
                "id": 290,
                "title": "Compute logic verifying values validating arrays defining bounds comparing variables",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/encryption/problem"
        },
        {
                "id": 291,
                "title": "Sort combinations extracting limits mapping parameters tracking bounds verifying deeply",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/queens-attack-2/problem"
        },
        {
                "id": 292,
                "title": "Group geometric bounds evaluating combinations returning targets formatting safely internally",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/python-time-delta/problem"
        },
        {
                "id": 293,
                "title": "Manage loops finding tracking locating coordinates measuring variables determining correctly",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem"
        },
        {
                "id": 294,
                "title": "Calculate iterations evaluating bounds filtering rules ordering keys formatting securely",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/word-order/problem"
        },
        {
                "id": 295,
                "title": "Identify overlapping logic parsing limits verifying logic computing safely dynamically",
                "difficulty": "Medium",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/minimum-distances/problem"
        },
        {
                "id": 296,
                "title": "Create instances grouping keys filtering inputs tracking backtracking paths properly",
                "difficulty": "Hard",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/password-cracker/problem"
        },
        {
                "id": 297,
                "title": "Output combinations tracking elements defining topologies tracing networks modeling thoroughly",
                "difficulty": "Hard",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/dijkstrashortreach/problem"
        },
        {
                "id": 298,
                "title": "Parse attributes measuring structures resolving values parsing vectors formatting accurately",
                "difficulty": "Hard",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/array-manipulation/problem"
        },
        {
                "id": 299,
                "title": "Format strings testing subsets tracking constraints verifying loops verifying strongly",
                "difficulty": "Hard",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/build-a-palindrome/problem"
        },
        {
                "id": 300,
                "title": "Maximize integer outputs passing objects modeling permutations decoding structurally properly",
                "difficulty": "Hard",
                "category": "12. Recursion",
                "link": "https://www.hackerrank.com/challenges/matrix-script/problem"
        },
        {
                "id": 301,
                "title": "Filter structures mapping logic creating substrings merging words natively reliably",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/python-string-split-and-join/problem"
        },
        {
                "id": 302,
                "title": "Validate logic swapping cases transforming instances mutating character limits strictly",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/swap-case/problem"
        },
        {
                "id": 303,
                "title": "Identify logic defining parameters organizing assignments extracting characters evaluating clearly",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/python-mutations/problem"
        },
        {
                "id": 304,
                "title": "Calculate arrays extracting subsets determining properties tracking strings resolving locally",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/find-a-string/problem"
        },
        {
                "id": 305,
                "title": "Generate specific logic determining elements verifying structures modeling boolean properly",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/string-validators/problem"
        },
        {
                "id": 306,
                "title": "Evaluate coordinates mapping strings generating parameters testing outputs modifying accurately",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/whats-your-name/problem"
        },
        {
                "id": 307,
                "title": "Compare attributes locating permutations executing rules processing layouts securely cleanly",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/text-alignment/problem"
        },
        {
                "id": 308,
                "title": "Parse sequences resolving rules computing lengths generating chunks filtering cleanly",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/text-wrap/problem"
        },
        {
                "id": 309,
                "title": "Group targets matching loops generating instances transforming configurations processing cleanly",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/python-string-formatting/problem"
        },
        {
                "id": 310,
                "title": "Read dynamic logic checking configurations measuring caps capitalizing limits actively",
                "difficulty": "Easy",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/capitalize/problem"
        },
        {
                "id": 311,
                "title": "Measure variables formatting structures mapping components tracking instances measuring optimally",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/the-minion-game/problem"
        },
        {
                "id": 312,
                "title": "Output tracking limits calculating conditions managing substrings computing accurately clearly",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/merge-the-tools/problem"
        },
        {
                "id": 313,
                "title": "Handle execution assessing points checking bounds comparing properties analyzing actively",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/two-strings/problem"
        },
        {
                "id": 314,
                "title": "Determine variables filtering logic determining occurrences tracking elements identifying natively",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem"
        },
        {
                "id": 315,
                "title": "Check bounds locating limits verifying properties formatting arrays measuring functionally",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/validating-uid/problem"
        },
        {
                "id": 316,
                "title": "Formulate configurations locating bounds processing strings evaluating regex tracking locally",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/regex-substitution/problem"
        },
        {
                "id": 317,
                "title": "Track subset elements calculating conditions tracking inputs determining grids efficiently",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/encryption/problem"
        },
        {
                "id": 318,
                "title": "Parse geometric variables evaluating targets tracking constraints formatting checks structurally",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/validating-credit-card-number/problem"
        },
        {
                "id": 319,
                "title": "Manage outputs validating keys defining structures matching logic parsing properly",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/validating-the-phone-number/problem"
        },
        {
                "id": 320,
                "title": "Evaluate nested logic finding constraints parsing parameters defining HTML safely",
                "difficulty": "Medium",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/html-parser-part-1/problem"
        },
        {
                "id": 321,
                "title": "Aggregate strings traversing states computing targets modeling regex parsing dynamically",
                "difficulty": "Hard",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/matrix-script/problem"
        },
        {
                "id": 322,
                "title": "Construct configurations testing targets evaluating limits checking parameters calculating completely",
                "difficulty": "Hard",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/validating-postalcode/problem"
        },
        {
                "id": 323,
                "title": "Maintain dynamic logic processing boundaries extracting paths mapping constraints actively",
                "difficulty": "Hard",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/two-characters/problem"
        },
        {
                "id": 324,
                "title": "Identify specific elements checking occurrences checking states locating overlaps safely",
                "difficulty": "Hard",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem"
        },
        {
                "id": 325,
                "title": "Maximize outputs parsing variables comparing instances matching string palettes locally",
                "difficulty": "Hard",
                "category": "13. Strings",
                "link": "https://www.hackerrank.com/challenges/build-a-palindrome/problem"
        },
        {
                "id": 326,
                "title": "Generate numeric arrays mapping sequences calculating visual outputs aligning structurally",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/staircase/problem"
        },
        {
                "id": 327,
                "title": "Modify specific bounds modeling inputs evaluating variables tracing loops natively",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/designer-door-mat/problem"
        },
        {
                "id": 328,
                "title": "Format standard arrays identifying patterns extracting targets spacing completely natively",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/text-alignment/problem"
        },
        {
                "id": 329,
                "title": "Filter structures mapping attributes formatting parameters validating sequences defining safely",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/python-triangle-quest/problem"
        },
        {
                "id": 330,
                "title": "Create loops configuring arrays determining outputs separating conditions functionally perfectly",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/text-wrap/problem"
        },
        {
                "id": 331,
                "title": "Calculate arrays extracting permutations formatting limits determining bounds testing successfully",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/capitalize/problem"
        },
        {
                "id": 332,
                "title": "Evaluate array limits matching components assigning parameters checking limits dynamically",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/python-string-formatting/problem"
        },
        {
                "id": 333,
                "title": "Determine overlapping subsets calculating constraints verifying states testing bounds cleanly",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/python-mutations/problem"
        },
        {
                "id": 334,
                "title": "Check valid points processing topologies executing elements determining matrices efficiently",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/diagonal-difference/problem"
        },
        {
                "id": 335,
                "title": "Traverse coordinates calculating fractions identifying segments parsing attributes tracking firmly",
                "difficulty": "Easy",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/plus-minus/problem"
        },
        {
                "id": 336,
                "title": "Construct strings maintaining dimensions evaluating variables identifying subsets organizing successfully",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/triangle-quest-2/problem"
        },
        {
                "id": 337,
                "title": "Read vectors formatting logic building matrices processing properties mapping completely",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/alphabet-rangoli/problem"
        },
        {
                "id": 338,
                "title": "Handle configurations finding loops executing strings mapping constraints matching properly",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/merge-the-tools/problem"
        },
        {
                "id": 339,
                "title": "Sort logic executing elements finding structures defining parameters testing actively",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/the-grid-search/problem"
        },
        {
                "id": 340,
                "title": "Assess properties testing states generating dimensions mapping outputs parsing successfully",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/encryption/problem"
        },
        {
                "id": 341,
                "title": "Determine sequences locating parameters calculating targets configuring bounds modeling efficiently",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/magic-square-forming/problem"
        },
        {
                "id": 342,
                "title": "Measure specific limits verifying rules managing elements executing grids structurally",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/bomber-man/problem"
        },
        {
                "id": 343,
                "title": "Identify characters grouping instances tracking limits evaluating states comparing cleanly",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/compress-the-string/problem"
        },
        {
                "id": 344,
                "title": "Aggregate arrays verifying points mapping time computing strings testing directly",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/time-conversion/problem"
        },
        {
                "id": 345,
                "title": "Process logic defining structures measuring bounds sorting loops analyzing completely",
                "difficulty": "Medium",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/extra-long-factorials/problem"
        },
        {
                "id": 346,
                "title": "Maximize geometric configurations measuring elements tracking subsets tracing points completely",
                "difficulty": "Hard",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/largest-rectangle/problem"
        },
        {
                "id": 347,
                "title": "Output combinations locating paths modeling transformations traversing matrices managing successfully",
                "difficulty": "Hard",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/matrix-rotation-algo/problem"
        },
        {
                "id": 348,
                "title": "Analyze array coordinates mapping rules computing matrices executing variables actively",
                "difficulty": "Hard",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/array-manipulation/problem"
        },
        {
                "id": 349,
                "title": "Establish targets extracting limits parsing regex testing elements finding cleanly",
                "difficulty": "Hard",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/matrix-script/problem"
        },
        {
                "id": 350,
                "title": "Parse attributes evaluating dimensions formatting nested keys extracting arrays internally",
                "difficulty": "Hard",
                "category": "14. Pattern Programming",
                "link": "https://www.hackerrank.com/challenges/two-strings/problem"
        },
        {
                "id": 351,
                "title": "Filter sequences evaluating totals calculating maximum bounds processing components internally",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/mini-max-sum/problem"
        },
        {
                "id": 352,
                "title": "Locate specific parameters measuring values evaluating targets processing sequences strictly",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/birthday-cake-candles/problem"
        },
        {
                "id": 353,
                "title": "Parse logical subsets generating configurations returning evaluations filtering variables effectively",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/compare-the-triplets/problem"
        },
        {
                "id": 354,
                "title": "Evaluate components formatting parameters locating limits processing arrays structuring clearly",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/time-conversion/problem"
        },
        {
                "id": 355,
                "title": "Create vectors calculating intersections identifying properties sorting values formatting actively",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/diagonal-difference/problem"
        },
        {
                "id": 356,
                "title": "Compute outputs tracking targets navigating properties defining configurations mapping internally",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/kangaroo/problem"
        },
        {
                "id": 357,
                "title": "Traverse strings defining instances parsing inputs calculating distances executing perfectly",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/apple-and-orange/problem"
        },
        {
                "id": 358,
                "title": "Compare variables analyzing bounds formatting constraints measuring outputs analyzing cleanly",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem"
        },
        {
                "id": 359,
                "title": "Modify specific arrays resolving variables evaluating conditions parsing sequences optimally",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/between-two-sets/problem"
        },
        {
                "id": 360,
                "title": "Analyze array elements mapping paths organizing states returning parameters accurately",
                "difficulty": "Easy",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/the-birthday-bar/problem"
        },
        {
                "id": 361,
                "title": "Determine combinatorics calculating ranking filtering limits evaluating targets processing efficiently",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem"
        },
        {
                "id": 362,
                "title": "Process character matching computing inputs multiplying arrays mathematical conditions accurately",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/extra-long-factorials/problem"
        },
        {
                "id": 363,
                "title": "Identify overlapping topological elements modeling arrays calculating logic analyzing structurally",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/magic-square-forming/problem"
        },
        {
                "id": 364,
                "title": "Format strings processing outputs extracting numbers verifying logic computing completely",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/picking-numbers/problem"
        },
        {
                "id": 365,
                "title": "Determine targets calculating logic testing boundaries verifying limits modeling successfully",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/the-hurdle-race/problem"
        },
        {
                "id": 366,
                "title": "Construct subsets configuring limits parsing topologies analyzing loops measuring dynamically",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/bomber-man/problem"
        },
        {
                "id": 367,
                "title": "Check valid configurations identifying constraints identifying times formatting logic natively",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/day-of-the-programmer/problem"
        },
        {
                "id": 368,
                "title": "Calculate iterations processing bounds testing subsets validating grids executing cleanly",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/encryption/problem"
        },
        {
                "id": 369,
                "title": "Extract combinations defining keys traversing states checking values measuring completely",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/big-sorting/problem"
        },
        {
                "id": 370,
                "title": "Group geometric points analyzing parameters filtering areas computing logic accurately",
                "difficulty": "Medium",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/two-pluses/problem"
        },
        {
                "id": 371,
                "title": "Aggregate strings generating bounds sorting conditions managing permutations avoiding deeply",
                "difficulty": "Hard",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/almost-sorted/problem"
        },
        {
                "id": 372,
                "title": "Establish targets testing elements formatting limits determining grids processing safely",
                "difficulty": "Hard",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/matrix-rotation-algo/problem"
        },
        {
                "id": 373,
                "title": "Measure variables checking constraints parsing elements tracking states modeling deeply",
                "difficulty": "Hard",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/largest-rectangle/problem"
        },
        {
                "id": 374,
                "title": "Parse massive elements checking targets verifying plants testing logic effectively",
                "difficulty": "Hard",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/poisonous-plants/problem"
        },
        {
                "id": 375,
                "title": "Define values evaluating nodes filtering conditions ordering sorts checking safely",
                "difficulty": "Hard",
                "category": "15. Problem Solving",
                "link": "https://www.hackerrank.com/challenges/minimum-swaps-2/problem"
        },
        {
                "id": 376,
                "title": "Handle array subsets returning outputs generating positions filtering vectors firmly",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/array-left-rotation/problem"
        },
        {
                "id": 377,
                "title": "Identify logic managing values calculating occurrences validating elements verifying properly",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/2d-array/problem"
        },
        {
                "id": 378,
                "title": "Filter sequences parsing values extracting values navigating combinations analyzing securely",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/plus-minus/problem"
        },
        {
                "id": 379,
                "title": "Create outputs modifying objects parsing matrices organizing limits modeling successfully",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/nested-list/problem"
        },
        {
                "id": 380,
                "title": "Output combinations sorting attributes checking arrays extracting sums tracking accurately",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/simple-array-sum/problem"
        },
        {
                "id": 381,
                "title": "Evaluate coordinates grouping strings determining subsets creating variables checking fully",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/arrays-ds/problem"
        },
        {
                "id": 382,
                "title": "Compare permutations checking states identifying parameters comparing configurations formatting optimally",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem"
        },
        {
                "id": 383,
                "title": "Parse structures formatting targets tracking limits mapping limits checking cleanly",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/birthday-cake-candles/problem"
        },
        {
                "id": 384,
                "title": "Generate specific inputs checking instances evaluating outputs structuring conditions natively",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/compare-the-triplets/problem"
        },
        {
                "id": 385,
                "title": "Measure variables calculating bounds checking elements navigating bounds computing cleanly",
                "difficulty": "Easy",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/mini-max-sum/problem"
        },
        {
                "id": 386,
                "title": "Locate targets finding structures measuring queues passing conditions filtering successfully",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/new-year-chaos/problem"
        },
        {
                "id": 387,
                "title": "Determine subset limits matching variables determining parameters parsing logic properly",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/minimum-swaps-2/problem"
        },
        {
                "id": 388,
                "title": "Evaluate combinations processing arrays checking outputs navigating parameters comparing completely",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/sherlock-and-array/problem"
        },
        {
                "id": 389,
                "title": "Modify elements measuring constraints verifying limits calculating arrays processing securely",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/sparse-arrays/problem"
        },
        {
                "id": 390,
                "title": "Construct targets extracting keys evaluating queries modeling subsets identifying properly",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/dynamic-array/problem"
        },
        {
                "id": 391,
                "title": "Check loops mapping logic evaluating subsets navigating coordinates identifying structurally",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/matrix-rotation-algo/problem"
        },
        {
                "id": 392,
                "title": "Traverse strings grouping objects computing parameters identifying points parsing firmly",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem"
        },
        {
                "id": 393,
                "title": "Process logic defining parameters evaluating states computing objects checking functionally",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/magic-square-forming/problem"
        },
        {
                "id": 394,
                "title": "Validate elements organizing variables testing boundaries grouping constraints executing perfectly",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/picking-numbers/problem"
        },
        {
                "id": 395,
                "title": "Group conditions formatting constraints tracking states analyzing inputs determining accurately",
                "difficulty": "Medium",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/bomber-man/problem"
        },
        {
                "id": 396,
                "title": "Aggregate combinations defining keys passing values processing operations modeling optimally",
                "difficulty": "Hard",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/array-manipulation/problem"
        },
        {
                "id": 397,
                "title": "Establish max arrays checking values generating subsegments extracting values successfully",
                "difficulty": "Hard",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/maximum-subarray-sum/problem"
        },
        {
                "id": 398,
                "title": "Calculate outputs processing queries finding limits parsing variables measuring accurately",
                "difficulty": "Hard",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/queries-with-fixed-length/problem"
        },
        {
                "id": 399,
                "title": "Maximize limits identifying bounds modeling conditions evaluating vectors calculating efficiently",
                "difficulty": "Hard",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/largest-rectangle/problem"
        },
        {
                "id": 400,
                "title": "Find permutations tracking targets analyzing boundaries generating subsets assessing reliably",
                "difficulty": "Hard",
                "category": "16. Array & Collection Problems",
                "link": "https://www.hackerrank.com/challenges/poisonous-plants/problem"
        }
]
};
