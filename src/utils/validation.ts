
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface ValidationErrors {
  [key: string]: string;
}

export const validateForm = (data: any, rules: ValidationRules): ValidationErrors => {
  const errors: ValidationErrors = {};

  Object.keys(rules).forEach(field => {
    const value = data[field];
    const rule = rules[field];

    // Required validation
    if (rule.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      return;
    }

    // Skip other validations if field is empty and not required
    if (!value && !rule.required) return;

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${rule.minLength} characters`;
      return;
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be no more than ${rule.maxLength} characters`;
      return;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} format is invalid`;
      return;
    }

    // Custom validation
    if (rule.custom) {
      const customError = rule.custom(value);
      if (customError) {
        errors[field] = customError;
      }
    }
  });

  return errors;
};

export const emailValidation: ValidationRule = {
  required: true,
  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

export const phoneValidation: ValidationRule = {
  pattern: /^[\+]?[1-9][\d]{0,15}$/
};
