import { addPerson } from "../data-base/person-database";

export const typeDef = `
# Mutations
type Mutation {
    addPerson(name: String!, sex: String!): PersonType
}
`;

export const resolver = {
    Mutation: {
        addPerson(root, args, ctx) {
            return addPerson(ctx.persons, {id:  Math.random().toString(16).substr(2), name: args.name, sex: args.sex});
        },
    },
};
