import json
import tkinter as tk
from tkinter import ttk

# Load JSON
with open('cool.json', 'r') as file:
    machines = json.load(file)

# GUI Setup
root = tk.Tk()
root.title("Factory Machines")
root.geometry("400x400")

# Create a scrollable frame
canvas = tk.Canvas(root)
scrollbar = ttk.Scrollbar(root, orient="vertical", command=canvas.yview)
scrollable_frame = ttk.Frame(canvas)

scrollable_frame.bind(
    "<Configure>",
    lambda e: canvas.configure(
        scrollregion=canvas.bbox("all")
    )
)

canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")
canvas.configure(yscrollcommand=scrollbar.set)

canvas.pack(side="left", fill="both", expand=True)
scrollbar.pack(side="right", fill="y")

# Populate the GUI with machine data
# Populate the GUI with machine data
for entry in machines:
    for machine, info in entry.items():
        frame = ttk.LabelFrame(scrollable_frame, text=machine, padding=10)
        frame.pack(fill="x", pady=5, padx=10)

        inputs = ", ".join(info.get("Inputs", []))
        output = info.get("Output", "N/A")

        ttk.Label(frame, text=f"Inputs: {inputs}").pack(anchor="w")
        ttk.Label(frame, text=f"Output: {output}").pack(anchor="w")


root.mainloop()
