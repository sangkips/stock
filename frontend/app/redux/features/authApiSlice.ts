import { apiSlice } from "../services/apiSlice";

// add typing for user object
interface User{
    first_name: string;
    last_name: string;
    email: string;
}

interface Customer{
    first_name: string;
    last_name: string;
    middle_name: string;
    phone: string;
    address: string;
}

interface Category{
    name: string;
    description: string;
}

interface Supplier {
    name: string;
    address: string;
    phone: string;
    email: string;
    kra_pin: string; 
}

interface Expense {
    expense_type: string;
    description: string;
    amount: number;
}

interface Product {
    name: string;
    description: string;
    quantity: string;
    category: string;
}

interface Purchase{
    quantity: number;
    price: number;
    product: string;
    supplier: string;
}

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveUser: builder.query<User, void>({
            query: () => '/users/me/',
        }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: '/account/jwt/create/',
                method: 'POST',
                body: {
                    email,
                    password,
                },
            }),
        }),
        register: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				password,
				re_password,
			}) => ({
				url: '/users/',
				method: 'POST',
				body: { first_name, last_name, email, password, re_password },
			}),
		}),
        verify: builder.mutation({
            query: () => ({
                url: '/account/jwt/verify/',
                method: 'POST',
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/account/logout/',
                method: 'POST',
            }),
        }),
        activation: builder.mutation({
            query: ({ uid, token }) => ({
                url: '/users/activation/',
                method: 'POST',
                body: {uid, token},
            }),
        }),
        resetPassword: builder.mutation({
            query: (email) => ({
                url: '/users/reset_password/',
                method: 'POST',
                body: {email},
            }),
        }),
        resetPasswordConfirm: builder.mutation({
            query: ({ uid, token, new_password, re_new_password}) => ({
                url: '/users/reset_password_confirm/',
                method: 'POST',
                body: {uid, token, new_password, re_new_password},
            }),
        }),
        createCustomer: builder.mutation({
            query: ({ first_name, last_name, middle_name, phone, address}) => ({
                url: '/product/customer/',
                method: 'POST',
                body: {first_name, last_name, middle_name, phone, address},
            }),
        }),
        createCategory: builder.mutation({
            query: ({ name, description}) => ({
                url: '/product/category/',
                method: 'POST',
                body: {name, description},
            }),
        }),

        createSupplier: builder.mutation({
            query: ({ name, address, phone, email, kra_pin}) => ({
                url: '/product/supplier/',
                method: 'POST',
                body: {name, address, phone, email, kra_pin},
            }),
        }),
        createExpense: builder.mutation({
            query: ({ expense_type, description, amount}) => ({
                url: '/product/expense/',
                method: 'POST',
                body: {expense_type, description, amount},
            }),
        }),
        createProduct: builder.mutation({
            query: ({ name, description, quantity, category}) => ({
                url: '/product/products/',
                method: 'POST',
                body: {name, description, quantity, category},
            }),
        }),
        createPurchase: builder.mutation({
            query: ({ quantity, price, product, supplier}) => ({
                url: '/product/purchase/',
                method: 'POST',
                body: {quantity, price, product, supplier},
            }),
        }),
        retrieveSupplier: builder.query<Supplier, void>({
            query: () =>  '/product/supplier/',
        }),
        retrieveProduct: builder.query<Product, void>({
            query: () =>  '/product/products/',
        }),
        retrievePurchase: builder.query<Purchase, void>({
            query: () =>  '/product/purchase/',
        }),
        retrieveExpense: builder.query<Expense, void>({
            query: () =>  '/product/expense/',
        }),
        retrieveCustomer: builder.query<Customer, void>({
            query: () =>  '/product/customer/',
        }),
        retrieveCategory: builder.query<Category, void>({
            query: () =>  '/product/category/',
        }),
        getCategories: builder.query<Category, void>({
            query: () =>  '/product/category/',
        }),
    }),
});

export const {
    useRetrieveUserQuery,
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    useLogoutMutation,
    useActivationMutation,
    useResetPasswordMutation,
    useResetPasswordConfirmMutation,
    useCreateCustomerMutation,
    useRetrieveCustomerQuery,
    useRetrieveCategoryQuery,
    useCreateCategoryMutation,
    useCreateSupplierMutation,
    useRetrieveSupplierQuery,
    useCreateExpenseMutation,
    useRetrieveExpenseQuery,
    useRetrieveProductQuery,
    useRetrievePurchaseQuery,
    useCreateProductMutation,
    useCreatePurchaseMutation,
    useGetCategoriesQuery
} = authApiSlice;