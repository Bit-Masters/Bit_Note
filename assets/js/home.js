const list = [
	{
		id: 0,
		title: 'Work ToDo List',
		content: 'Organize files\n Remove trash\n Make Coffee'
	},
	{
		id: 1,
		title: 'Home ToDo List',
		content: 'Wash the dishes\n Take the dogs out\n Clean Toilet'
	},
	{
		id: 2,
		title: 'Bed ToDo List',
		content: 'Make the bed\n Organize mangas\n Change bed cover'
	},
	{
		id: 3,
		title: 'Market ToDo List',
		content: 'Rice\n Fish\n Oil\n Bean\n Eggs'
	},
	{
		id: 4,
		title: 'Car ToDo List',
		content: 'Fix Tilerid\n Remove Rob\n Clean Inside'
	}
]
document.addEventListener('DOMContentLoaded', function() {
    list.map((ele) => {
		cardList(ele, 'ListContainer')
	})
	
});


