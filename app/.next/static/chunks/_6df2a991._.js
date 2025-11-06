(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AddNewRecord.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/actions/addExpenseRecord'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/app/actions/suggestCategory'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AddRecord = ()=>{
    _s();
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50); // Default value for expense amount
    const [alertMessage, setAlertMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // State for alert message
    const [alertType, setAlertType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // State for alert type
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // State for loading spinner
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // State for selected expense category
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // State for expense description
    const [isCategorizingAI, setIsCategorizingAI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // State for AI categorization loading
    const clientAction = async (formData)=>{
        setIsLoading(true); // Show spinner
        setAlertMessage(null); // Clear previous messages
        formData.set('amount', amount.toString()); // Add the amount value to the form data
        formData.set('category', category); // Add the selected category to the form data
        const { error } = await addExpenseRecord(formData); // Removed `data` since it's unused
        if (error) {
            setAlertMessage("Error: ".concat(error));
            setAlertType('error'); // Set alert type to error
        } else {
            var _formRef_current;
            setAlertMessage('Expense record added successfully!');
            setAlertType('success'); // Set alert type to success
            (_formRef_current = formRef.current) === null || _formRef_current === void 0 ? void 0 : _formRef_current.reset();
            setAmount(50); // Reset the amount to the default value
            setCategory(''); // Reset the category
            setDescription(''); // Reset the description
        }
        setIsLoading(false); // Hide spinner
    };
    const handleAISuggestCategory = async ()=>{
        if (!description.trim()) {
            setAlertMessage('Please enter a description first');
            setAlertType('error');
            return;
        }
        setIsCategorizingAI(true);
        setAlertMessage(null);
        try {
            const result = await suggestCategory(description);
            if (result.error) {
                setAlertMessage("AI Suggestion: ".concat(result.error));
                setAlertType('error');
            } else {
                setCategory(result.category);
                setAlertMessage("AI suggested category: ".concat(result.category));
                setAlertType('success');
            }
        } catch (e) {
            setAlertMessage('Failed to get AI category suggestion');
            setAlertType('error');
        } finally{
            setIsCategorizingAI(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-sm sm:text-lg",
                            children: "💳"
                        }, void 0, false, {
                            fileName: "[project]/components/AddNewRecord.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/AddNewRecord.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight",
                                children: "Add New Expense"
                            }, void 0, false, {
                                fileName: "[project]/components/AddNewRecord.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                children: "Track your spending with AI assistance"
                            }, void 0, false, {
                                fileName: "[project]/components/AddNewRecord.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AddNewRecord.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/AddNewRecord.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                ref: formRef,
                onSubmit: (e)=>{
                    e.preventDefault();
                    const formData = new FormData(formRef.current);
                    clientAction(formData);
                },
                className: "space-y-6 sm:space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-emerald-50/50 to-green-50/50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-xl border border-emerald-100/50 dark:border-emerald-800/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "text",
                                        className: "flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Expense Description"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "text",
                                                name: "text",
                                                value: description,
                                                onChange: (e)=>setDescription(e.target.value),
                                                className: "w-full pl-3 pr-12 sm:pr-14 py-2.5 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200/80 dark:border-gray-600/80 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-gray-700/90 focus:border-emerald-400 dark:focus:border-emerald-400 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm shadow-sm hover:shadow-md transition-all duration-200",
                                                placeholder: "Coffee, groceries, gas...",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleAISuggestCategory,
                                                disabled: isCategorizingAI || !description.trim(),
                                                className: "absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-7 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 disabled:from-gray-300 disabled:to-gray-300 text-white rounded-lg text-xs font-medium flex items-center justify-center shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-200",
                                                title: "AI Category Suggestion",
                                                children: isCategorizingAI ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddNewRecord.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: "✨"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddNewRecord.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isCategorizingAI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "AI is analyzing your description..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AddNewRecord.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "date",
                                        className: "flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-green-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Expense Date"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        name: "date",
                                        id: "date",
                                        className: "w-full px-3 py-2.5 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200/80 dark:border-gray-600/80 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-gray-700/90 focus:border-emerald-400 dark:focus:border-emerald-400 text-gray-900 dark:text-gray-100 text-sm shadow-sm hover:shadow-md transition-all duration-200",
                                        required: true,
                                        onFocus: (e)=>e.target.showPicker()
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AddNewRecord.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AddNewRecord.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl border border-green-100/50 dark:border-green-800/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "category",
                                        className: "flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-green-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Category",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 dark:text-gray-500 ml-2 font-normal hidden sm:inline",
                                                children: "Use the ✨ button above for AI suggestions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "category",
                                        name: "category",
                                        value: category,
                                        onChange: (e)=>setCategory(e.target.value),
                                        className: "w-full px-3 py-2.5 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200/80 dark:border-gray-600/80 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-gray-700/90 focus:border-emerald-400 dark:focus:border-emerald-400 text-gray-900 dark:text-gray-100 cursor-pointer text-sm shadow-sm hover:shadow-md transition-all duration-200",
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                className: "text-gray-400 dark:text-gray-500",
                                                children: "Select category..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Food",
                                                className: "text-gray-900 dark:text-gray-100",
                                                children: "🍔 Food & Dining"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Transportation",
                                                className: "text-gray-900 dark:text-gray-100",
                                                children: "🚗 Transportation"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Shopping",
                                                className: "text-gray-900 dark:text-gray-100",
                                                children: "🛒 Shopping"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Entertainment",
                                                className: "text-gray-900 dark:text-gray-100",
                                                children: "🎬 Entertainment"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Bills",
                                                className: "text-gray-900 dark:text-gray-100",
                                                children: "💡 Bills & Utilities"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Healthcare",
                                                className: "text-gray-900 dark:text-gray-100",
                                                children: "🏥 Healthcare"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Other",
                                                className: "text-gray-900 dark:text-gray-100",
                                                children: "📦 Other"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AddNewRecord.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "amount",
                                        className: "flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-green-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Amount",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 dark:text-gray-500 ml-2 font-normal hidden sm:inline",
                                                children: "Enter amount between $0 and $1,000"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 font-medium text-sm",
                                                children: "$"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "amount",
                                                id: "amount",
                                                min: "0",
                                                max: "1000",
                                                step: "0.01",
                                                value: amount,
                                                onChange: (e)=>setAmount(parseFloat(e.target.value) || 0),
                                                className: "w-full pl-6 pr-3 py-2.5 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200/80 dark:border-gray-600/80 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-gray-700/90 focus:border-emerald-400 dark:focus:border-emerald-400 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200",
                                                placeholder: "0.00",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddNewRecord.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AddNewRecord.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AddNewRecord.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl group transition-all duration-300 border-2 border-transparent hover:border-white/20 text-sm sm:text-base",
                        disabled: isLoading,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-center gap-2",
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Processing..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 271,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "💫"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Expense"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddNewRecord.tsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/AddNewRecord.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/AddNewRecord.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/AddNewRecord.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            alertMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-3 rounded-xl border-l-4 backdrop-blur-sm ".concat(alertType === 'success' ? 'bg-green-50/80 dark:bg-green-900/20 border-l-green-500 text-green-800 dark:text-green-200' : 'bg-red-50/80 dark:bg-red-900/20 border-l-red-500 text-red-800 dark:text-red-200'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 rounded-full flex items-center justify-center ".concat(alertType === 'success' ? 'bg-green-100 dark:bg-green-800' : 'bg-red-100 dark:bg-red-800'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: alertType === 'success' ? '✅' : '⚠️'
                            }, void 0, false, {
                                fileName: "[project]/components/AddNewRecord.tsx",
                                lineNumber: 300,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/AddNewRecord.tsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium text-sm",
                            children: alertMessage
                        }, void 0, false, {
                            fileName: "[project]/components/AddNewRecord.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddNewRecord.tsx",
                    lineNumber: 292,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/AddNewRecord.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/AddNewRecord.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddRecord, "PUmOr9eP8mMdVqkGy7HYzxIm18E=");
_c = AddRecord;
const __TURBOPACK__default__export__ = AddRecord;
var _c;
__turbopack_context__.k.register(_c, "AddRecord");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/uiComponents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIKeys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIKeys"],
    "CreateOrganization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateOrganization"],
    "GoogleOneTap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleOneTap"],
    "OrganizationList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganizationList"],
    "OrganizationProfile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$uiComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["OrganizationProfile"],
    "OrganizationSwitcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganizationSwitcher"],
    "PricingTable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PricingTable"],
    "SignIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$uiComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignIn"],
    "SignInButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignInButton"],
    "SignInWithMetamaskButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignInWithMetamaskButton"],
    "SignOutButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignOutButton"],
    "SignUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$uiComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignUp"],
    "SignUpButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignUpButton"],
    "TaskChooseOrganization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskChooseOrganization"],
    "UserButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserButton"],
    "UserProfile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$uiComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserProfile"],
    "Waitlist",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Waitlist"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$uiComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/uiComponents.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$5WUJBBRY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/chunk-5WUJBBRY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
}),
]);

//# sourceMappingURL=_6df2a991._.js.map