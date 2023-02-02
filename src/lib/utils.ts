export const buildFormData = (object: object) => {
	const formData = new FormData()
	Object.keys(object).forEach((key) => formData.append(key, object[key as keyof typeof object]))
	return formData
}
