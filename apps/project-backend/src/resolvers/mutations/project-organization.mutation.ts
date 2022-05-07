import { Resolvers } from '../../codegen-generated';
import { IGraphqlContext } from '../../context';

export const mutations: Resolvers<IGraphqlContext>['Mutation'] = {
  createProjectOrganization: (_parent, { input }, ctx) => {
    return ctx.projectOrganization.create(input);
  },
};
