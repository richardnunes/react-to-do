const validateEmpty = (value) => {
    if (!value.trim()) {
      return 'Please enter a todo item.';
    }
    return null; // No validation error
  };

  const validateLength = (value) => {
    if (value.length > 50) {
      return 'Todo item exceeds maximum length (50 characters).';
    }
    return null; // No validation error
  };

  const validateDuplicates = (text, todos) => {
    return todos.some((todo) => todo.text.toLowerCase() === text.toLowerCase());
  };

  const formValidation = (value, todos) => {
    const emptyError = validateEmpty(value);
    if (emptyError) {
      return emptyError;
    }

    const lengthError = validateLength(value);
    if (lengthError) {
      return lengthError;
    }

    if (validateDuplicates(value, todos)) {
      return 'This todo item already exists.';
    }

    return null; // No validation error
  };

  export default formValidation;
