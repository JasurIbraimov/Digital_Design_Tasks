/* Требование к задаче:
Дана коллекция представляющая собой массив записей в блоге, необходимо реализовать метод группировки элементов по пользователям
*/

// Основной массив
const model = [
	{
		id: 0,
		title: 'Title text 1',
		text: 'Some text 1',
		user: {
			id: 0,
			name: 'user 1',
		},
	},
	{
		id: 1,
		title: 'Title text 2',
		text: 'Some text 2',
		user: {
			id: 1,
			name: 'user 2',
		},
    },
	{
		id: 2,
		title: 'Title text 3',
		text: 'Some text 3',
		user: {
			id: 0,
			name: 'user 1',
		},
	},
	{
		id: 3,
		title: 'Title text 4',
		text: 'Some text 4',
		user: {
			id: 2,
			name: 'user 3',
		},
	},
	{
		id: 4,
		title: 'Title text 5',
		text: 'Some text 5',
		user: {
			id: 0,
			name: 'user 1',
		},
	},
]

// Фукнция которая находит в массиве посты пользователя по userId
const findUsersPost = (userId) => {
	const a = model.filter((el) => el.user.id === userId)
	const b = a.map((el) => {
		return {
			id: el.user.id,
			name: el.user.name,
			posts: [
				a.map((el) => {
					return {
						id: el.id,
						title: el.title,
						text: el.text,
					}
				}),
			],
		}
	})
	return b[0]
}

// Функция которая оставляет неповторяющиеся элементы
const makeUniqueArray = (array) => {
    return array.filter((item, index) =>  {
        return index === array.findIndex(object => {
            return JSON.stringify(object) === JSON.stringify(item)
        })
    })
}

const newArrayWithUsers = model.map(user => findUsersPost(user.user.id))
const uniqueArrayWithUsers = makeUniqueArray(newArrayWithUsers)

console.log('Users with their posts: ', uniqueArrayWithUsers)
