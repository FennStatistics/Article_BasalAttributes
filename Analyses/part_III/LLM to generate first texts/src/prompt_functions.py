""" 
API-Call
"""

from langchain_openai import ChatOpenAI
from langchain.callbacks import get_openai_callback

def huggingface_API_call(
    prompt,
    
    items_list,

    api_key,

    model_name="meta-llama/llama-3.3-70b-instruct",
    json_schema=None,
    max_tokens=1000,
    temperature=0.0,
    verbose=True
):

    # Initialize the ChatOpenAI model for Hugging Face
    model = ChatOpenAI(
        model=model_name,
        openai_api_key=api_key,
        openai_api_base="https://router.huggingface.co/novita/v3/openai",
        max_tokens=max_tokens,
        temperature=temperature
    )

    # Check if structured output is required and configure it
    if json_schema:
        structured_llm = model.with_structured_output(json_schema, include_raw=True)
        chain = prompt | structured_llm
    else:
        chain = prompt | model

    # Execute the model and output response details
    with get_openai_callback() as cb:
        response = chain.invoke(
            {"items_list": items_list}
        )
        
        if cb.total_tokens > max_tokens:
            print("Warning: The response may be incomplete due to exceeding the maximum token limit.")
        
        if verbose:
            print(cb)
            print(f"Total Tokens: {cb.total_tokens}")
            print(f"Prompt Tokens: {cb.prompt_tokens}")
            print(f"Completion Tokens: {cb.completion_tokens}")
            print(f"Total Cost (USD): ${cb.total_cost}")

    return response