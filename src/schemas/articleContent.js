const graphql = require('graphql');
const TitleType = require('./title');
const DroplineType = require('./dropline');
const BodyType = require('./body');
const blockMediaType = require('./media');
const authorMediaType = require('./author');
const tagType = require('./tag');
const peopleType = require('./people');
const sectionType = require('./section');

export default new graphql.GraphQLObjectType({
    name: 'articleContent',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
        },
        articleId: {
            type: graphql.GraphQLString
        },
        type: {
            type: graphql.GraphQLString
        },
        title: {
            type: graphql.GraphQLList(TitleType)
        },
        dropline: {
            type: DroplineType
        },
        body: {
            type: graphql.GraphQLList(BodyType)
        },
        media: {
            type: graphql.GraphQLList(blockMediaType)
        },
        changedISO: {
            type: graphql.GraphQLString
        },
        createdISO: {
            type: graphql.GraphQLString
        },
        uri: {
            type: graphql.GraphQLString
        },
        author: {
            type: authorMediaType
        },
        tagList: {
            type: graphql.GraphQLList(tagType)
        },
        peopleList: {
            type: graphql.GraphQLList(peopleType)
        },
        cover: {
            type: tagType
        },
        section: {
            type: sectionType
        }
    })
});