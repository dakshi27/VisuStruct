import { Component, OnInit } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  editor: monaco.editor.IStandaloneCodeEditor | undefined;

  initialCode = `// Write your C# linked list code here
class Node {
    public int Value;
    public Node Next;
    public Node(int value) {
        Value = value;
        Next = null;
    }
}`;

  ngOnInit() {
    setTimeout(() => {
      const editorElement = document.getElementById('editor');
      if (!editorElement) return;

      this.editor = monaco.editor.create(editorElement, {
        value: this.initialCode,
        language: 'csharp',
        theme: 'vs-dark',
        automaticLayout: true
      });
    }, 100); // slight delay ensures layout is ready
  }

  saveCode() {
    const code = this.editor?.getValue();
    console.log("Saved code:", code);
  }

  clearCode() {
    this.editor?.setValue("");
  }

  resetCode() {
    this.editor?.setValue(this.initialCode);
  }

  runCode() {
    const code = this.editor?.getValue();
    console.log("Code executed:", code);

    const randomValue = Math.floor(Math.random() * 100);
    this.renderNode(randomValue);
  }

  renderNode(value: number) {
    const div = document.createElement("div");
    div.innerText = value.toString();
    div.className = "bg-gray-200 text-gray-900 px-4 py-2 rounded-lg shadow-md border border-gray-300 font-semibold dark:bg-gray-700 dark:text-white";
    document.getElementById("visualizer")?.appendChild(div);
  }

  toggleTheme() {
    const body = document.body;
    if (!body || !this.editor) return;

    const isDark = body.classList.contains('dark');

    if (isDark) {
      body.classList.remove('dark');
      monaco.editor.setTheme('vs');
    } else {
      body.classList.add('dark');
      monaco.editor.setTheme('vs-dark');
    }

    this.editor.layout(); // refresh layout
  }
}
