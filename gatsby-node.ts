import * as path from 'path';
import { GatsbyNode } from 'gatsby';
import { caseStudies } from './src/data/caseStudies';

export const createPages: GatsbyNode["createPages"] = async( {actions} ) => {

    const { createPage } = actions;
    const caseStudyTemplate = path.resolve('./src/components/templates/CaseStudyTemplate.tsx');
    caseStudies.forEach((page) => {
        createPage({
            path: `/case-studies/${page.slug}`,
            component: caseStudyTemplate,
            context: {
                slug: page.slug,
                study: page
            }
        })
    })
}