import { NextResponse } from 'next/server';

/*
export default async function queryRAG(query) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Return mock data that matches the expected structure
    return {
        answer: {
            results_collector: {
                final_result: {
                    retrieved_node_ids: [
                        "77373ed9-96", // Endeavor: Software Engineering
                        'acbd7f14-45',
                        'a76b7801-d0',
                        '903424a4-ee',
                        '69005b0c-d0',
                        '432ed57c-62',
                        '044ccc25-f8',
                        '7cbe8d57-76',
                        'b7964e32-7b',
                        '3f3dda6d-ef'
                    ],
                    filtered_node_ids: [
                        'acbd7f14-45', '77373ed9-96'
                    ],
                    expanded_node_ids: [
                        'a3bbfb5f-96',
                        'b981e30f-54',
                        '77373ed9-96',
                        'a76b7801-d0',
                        '903424a4-ee',
                        'ac2e7668-71',
                        'c1449a6e-78',
                        '43cb2c5a-fa',
                        '98fa1431-22',
                        '761728ab-51',
                        'acbd7f14-45',
                        '8090cc72-a2',
                        '044ccc25-f8',
                        '105e0f71-dc',
                        '1423a363-fd',
                        '3a2dd83b-e2',
                        '8208dc8c-59',
                        '84f5f8e7-d6',
                        'aeea3ad1-8d',
                        'de8952ae-f2',
                        'd7ecc5cc-19',
                        'd5988ffd-03',


                    ],
                    replies: [
                        {
                            _content: [
                                {
                                    text: "Ethan has strong experience in software engineering with a focus on JavaScript and React. He's created several notable projects including a portfolio website and an API project. His colleagues recognize him as an effective problem solver, and he's collaborated with senior developers to improve his skills."
                                }
                            ],
                            _meta: {}
                        }
                    ]
                }
            }
        }
    };
}
    */




export default async function queryRAG(query) {

    try {
        const response = await fetch('/api/rag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query }),
        });

        const data = await response.json();

        return data

    } catch (error) {
        console.error('Error:', error);
    }

}



/*
{answer: {
        "results_collector": {
            "final_result": {
                "expanded_node_ids": List(str),
                "filtered_node_ids": List(str),
                "retrieved_node_ids": List(str),
                "replies": [
                    "_content": [
                        {
                            "text": str
                        }
                    ],
                    "_meta": {
                        
                    }
                ]
            }
        }
    }}
        */