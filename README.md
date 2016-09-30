# Custom-filters-in-Angular
Filters are used to format data.

Use module.filter to create a custom filter. Inside it, return a pure function (return function() {}; ), which means it will always return the same result given the same input.

You don't have to inject custom filter(myReverse) into controller. If you do, inject it as myReverseFiler.
