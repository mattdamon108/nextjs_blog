__NEXT_REGISTER_CHUNK("posts_2018_12_24_Deploy_Prisma_Server_to_AWS_with_Docker_md_9cdfdacb7bfddf4373f9a258cfa1adcb",function(){webpackJsonp([0],{264:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(1),s=n.n(t),o=n(423);n.n(o);a.default=function(e){var a=e.components;!function(e,a){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(s[n]=e[n]);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}}(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:a},s.a.createElement(o.MDXTag,{name:"h1",components:a},"Deploy the Prisma Server to the AWS EC2 with Docker"),s.a.createElement(o.MDXTag,{name:"p",components:a},"by moondaddi on 2018-12-24"),s.a.createElement(o.MDXTag,{name:"hr",components:a}),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Prisma?"),s.a.createElement(o.MDXTag,{name:"p",components:a},"Simply, the ",s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.prisma.io/"}},"Prisma")," is the new ORM(",s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Object-relational_mapping"}},"Object Relational Mapping"),") based on GraphQL query language. The Prisma can make your whole workflow to set up the graphQL API a lot easier. All you need is only graphQL schema in order to set up the graphQL API."),s.a.createElement(o.MDXTag,{name:"blockquote",components:a},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},"ex. GraphQL schema")),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-graphql",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-selector-tag"}},"type")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-selector-tag"}},"Tweet")," {\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"id"),": ID! ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-variable"}},"@unique"),"\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"createdAt"),": DateTime!\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"text"),": String!\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"owner"),": User!\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"location"),": Location!\n}\n\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-selector-tag"}},"type")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-selector-tag"}},"User")," {\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"id"),": ID! ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-variable"}},"@unique"),"\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"createdAt"),": DateTime!\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"updatedAt"),": DateTime!\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"handle"),": String! ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-variable"}},"@unique"),"\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"name"),": String\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"tweets"),": [Tweet!]!\n}\n\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-selector-tag"}},"type")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-selector-tag"}},"Location")," {\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"latitude"),": Float!\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attribute"}},"longitude"),": Float!\n}")),s.a.createElement(o.MDXTag,{name:"p",components:a},"If you make your graphQL schema to ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"datamodel.prisma")," file. It's all set. Prisma will deploy your schema to the connected DB(Prisma Cloud or your Remote DB/Local DB) and generate all kind of graphQL schema (types and resolvers) for you automatically. Fantastic, isn't it?"),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Structure"),s.a.createElement(o.MDXTag,{name:"p",components:a},s.a.createElement(o.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"/static/images/post_img/prisma_structure.jpg",alt:"Prisma structure"}})),s.a.createElement(o.MDXTag,{name:"blockquote",components:a},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},"GraphQL API Server = GraphQL API + Prisma Server")),s.a.createElement(o.MDXTag,{name:"p",components:a},"Prisma API Server consists of two parts, ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"GraphQL API")," + ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Prisma Server"),". GraphQL API is the backend layer which contains your business logic, such as querying users, sign up, log in, locations, and so on. You can set it up with Express or GraphQL Yoga, etc. Otherwise, Prisma Server means the backend server which contains all the graphQL schema as per your data model and is connected to database. Prisma suggests the Docker in order to set up Prisma Server."),s.a.createElement(o.MDXTag,{name:"p",components:a},"This post will explain how to deploy this Prisma Server to AWS ECS and ECR service."),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Deploy the Prisma Server"),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Requirements"),s.a.createElement(o.MDXTag,{name:"ul",components:a},s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},"Docker"),s.a.createElement(o.MDXTag,{name:"blockquote",components:a,parentName:"li"},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},"(for mac) ",s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac"}},"https://hub.docker.com/editions/community/docker-ce-desktop-mac")))),s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},"Prisma Cli"))),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," npm i -g prisma"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"#"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," or"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," yarn global add prisma"))),s.a.createElement(o.MDXTag,{name:"h2",components:a},"(Option 1) Using Docker machine"),s.a.createElement(o.MDXTag,{name:"p",components:a},"This is using docker-machine in cli. The docker-machine will create a docker machine on AWS EC2 directly. and docker-compose will compose the prisma server along with ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"docker-compse.yml")," in docker-machine."),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Create the docker machine on AWS EC2"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," docker-machine create --driver amazonec2 --amazonec2-region ap-northeast-2 --amazonec2-vpc-id __SPECIFIC_VPC__ prisma-server-example"))),s.a.createElement(o.MDXTag,{name:"ul",components:a},s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"If creating EC2 instance is failed, check your AWS credentials and IAM policy.")),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Activate new machine as active host"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," docker-machine prisma-server-example"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-built_in"}},"eval")," $(docker-machine env prisma-server-example)"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"\n#"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," check docker-machine"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," docker-machine ls"))),s.a.createElement(o.MDXTag,{name:"h3",components:a},s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h3"},"docker-compose.yml")," file"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-yml",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"version:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"3"'),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"services:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"  prisma:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"    image:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"prismagraphql/prisma:1.23"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"    restart:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"always"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"    ports:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-bullet"}},"      -")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"4466:4466"'),"\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# logging available in AWS CloudWatch"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"    logging:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"      driver:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"awslogs"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"      options:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"        awslogs-group:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"__AWSLOG_GROUP__"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"        awslogs-region:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"ap-northeast-2"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"        awslogs-stream-prefix:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"__AWSLOG_STREAM_PREFIX__"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"    environment:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"      PRISMA_CONFIG:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"|\n"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"        port:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"4466"),"\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# managementApiSecret: __SECRET_KEY__"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"        databases:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"          default:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            connector:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"postgres")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"# PostgreSQL"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            host:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"__AWS_RDS_HOST__"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            database:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"__DB_NAME__"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            schema:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"__DB_SCHEMA__"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            user:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"__DB_USERNAME__"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            password:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"__DB_PASSWORD__"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            rawAccess:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-literal"}},"true"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            port:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"5432"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"            migrations:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-literal"}},"false"))),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Compose Prisma Server in new docker machine"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},"docker compose up -d")),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Assign security group and check inbound rules"),s.a.createElement(o.MDXTag,{name:"ul",components:a},s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Basically, EC2 is assigned new security group as defalut. You need to check its inbound rule and open 4466 port.")),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Set the elastic load balancer (optional)"),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Modify prisma.yml"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-yml",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"endpoint:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"http://__AWS_EC2_ADDRESS__:4466"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"datamodel:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"datamodel.prisma"),"\n\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"generate:"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"  - generator:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"javascript-client"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"    output:")," ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"./generated/prisma-client/"))),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Deploy datamodel.prisma to Prisma Server in AWS EC2"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," PRISMA_MANAGEMENT_API_SECRET=__SECRET_KEY__ prisma deploy"))),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Generate prisma client for GraphQL API"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," prisma generate"))),s.a.createElement(o.MDXTag,{name:"p",components:a},"References"),s.a.createElement(o.MDXTag,{name:"blockquote",components:a},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.docker.com/machine/drivers/aws/"}},"https://docs.docker.com/machine/drivers/aws/")," ",s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.docker.com/machine/examples/aws/#step-2-use-machine-to-create-the-instance"}},"https://docs.docker.com/machine/examples/aws/#step-2-use-machine-to-create-the-instance"))),s.a.createElement(o.MDXTag,{name:"hr",components:a}),s.a.createElement(o.MDXTag,{name:"h2",components:a},"(Option 2) Using AWS ECS Cli"),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Create EC2 and ECS cluster"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," ecs-cli up --keypair __AWS_KEYPAIR_NAME__ --capability-iam --vpc __SPECIFIC_VPC__ --subnets __SUBNET_1__,__SUBNET_2__ --size 1 --instance-type t2.micro --cluster-config prisma-server-ecs"))),s.a.createElement(o.MDXTag,{name:"ul",components:a},s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"It will generate the cloudformation which will proceed the whole process to generate EC2 instance and ECS cluster.")),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Compose the Prisma Server to ECS container"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," ecs-cli compose up --create-log-groups --cluster-config prisma-server-ecs"))),s.a.createElement(o.MDXTag,{name:"ul",components:a},s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"It will generate the new Task definition. You can check the new Task definition is runnig.")),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Check if the new Task definition is running"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," esc-cli ps"))),s.a.createElement(o.MDXTag,{name:"ul",components:a},s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"If your new Task definition is working well, you might want to make new service in ECS cluster in order to manage the task.")),s.a.createElement(o.MDXTag,{name:"p",components:a},"References"),s.a.createElement(o.MDXTag,{name:"blockquote",components:a},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.aws.amazon.com/ko_kr/AmazonECR/latest/userguide/ECR_AWSCLI.html"}},"https://docs.aws.amazon.com/ko_kr/AmazonECR/latest/userguide/ECR_AWSCLI.html")," > ",s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/ECS_CLI_tutorial_EC2.html"}},"https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/ECS_CLI_tutorial_EC2.html"))))}},422:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s=m(n(1)),o=m(n(425)),r=m(n(157));function m(e){return e&&e.__esModule?e:{default:e}}var p=(0,o.default)({}),c=p.Provider,l=p.Consumer;a.withMDXComponents=function(e){return function(a){var n=a.components,o=function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}(a,["components"]);return s.default.createElement(l,null,function(a){return s.default.createElement(e,t({components:n||a},o))})}};var i=function(e){var a=e.components,n=e.children;return s.default.createElement(c,{value:a},n)};i.propTypes={components:r.default.object.isRequired,children:r.default.element.isRequired},a.default=i},423:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(424);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return o(t).default}});var s=n(422);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return o(s).default}})},424:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),o=n(1),r=c(o),m=c(n(263)),p=n(422);function c(e){return e&&e.__esModule?e:{default:e}}var l={inlineCode:"code",wrapper:"div"},i=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,o.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,n=e.parentName,s=e.props,o=void 0===s?{}:s,p=e.children,c=e.components,i=void 0===c?{}:c,g=e.Layout,u=e.layoutProps,h=i[n+"."+a]||i[a]||l[a]||a;return g?((0,m.default)(this,g),r.default.createElement(g,t({components:i},u),r.default.createElement(h,o,p))):r.default.createElement(h,o,p)}}]),a}();a.default=(0,p.withMDXComponents)(i)},425:function(e,a,n){"use strict";a.__esModule=!0;var t=o(n(1)),s=o(n(426));function o(e){return e&&e.__esModule?e:{default:e}}a.default=t.default.createContext||s.default,e.exports=a.default},426:function(e,a,n){"use strict";a.__esModule=!0;var t=n(1),s=(r(t),r(n(157))),o=r(n(427));r(n(428));function r(e){return e&&e.__esModule?e:{default:e}}function m(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function p(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function c(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}var l=1073741823;a.default=function(e,a){var n,r,i="__create-react-context-"+(0,o.default)()+"__",g=function(e){function n(){var a,t,s,o;m(this,n);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return a=t=p(this,e.call.apply(e,[this].concat(c))),t.emitter=(s=t.props.value,o=[],{on:function(e){o.push(e)},off:function(e){o=o.filter(function(a){return a!==e})},get:function(){return s},set:function(e,a){s=e,o.forEach(function(e){return e(s,a)})}}),p(t,a)}return c(n,e),n.prototype.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,t=e.value,s=void 0;((o=n)===(r=t)?0!==o||1/o==1/r:o!=o&&r!=r)?s=0:(s="function"==typeof a?a(n,t):l,0!=(s|=0)&&this.emitter.set(e.value,s))}var o,r},n.prototype.render=function(){return this.props.children},n}(t.Component);g.childContextTypes=((n={})[i]=s.default.object.isRequired,n);var u=function(a){function n(){var e,t;m(this,n);for(var s=arguments.length,o=Array(s),r=0;r<s;r++)o[r]=arguments[r];return e=t=p(this,a.call.apply(a,[this].concat(o))),t.state={value:t.getValue()},t.onUpdate=function(e,a){0!=((0|t.observedBits)&a)&&t.setState({value:t.getValue()})},p(t,e)}return c(n,a),n.prototype.componentWillReceiveProps=function(e){var a=e.observedBits;this.observedBits=void 0===a||null===a?l:a},n.prototype.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?l:e},n.prototype.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[i]?this.context[i].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(t.Component);return u.contextTypes=((r={})[i]=s.default.object,r),{Provider:g,Consumer:u}},e.exports=a.default},427:function(e,a,n){"use strict";(function(a){var n="__global_unique_id__";e.exports=function(){return a[n]=(a[n]||0)+1}}).call(a,n(261))},428:function(e,a,n){"use strict";var t=n(262);e.exports=t}})});