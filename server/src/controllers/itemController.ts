import { Request, Response, NextFunction } from 'express';
import { items, Item } from '../models/item';

/**
 * Boilerplate code: https://blog.logrocket.com/express-typescript-node/
 */

// Create an item
export const createItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const newItem: Item = { id: Date.now(), name };
        items.push(newItem);
        res.status(201).json(newItem);
    } catch (error) {
        next(error);
    }
};

// Read all items
export const getItems = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(items);
    } catch (error) {
        next(error);
    }
};

// Read single item
export const getItemById = (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id) return res.send("No id was provided in the updated, failed to update");
    
    try {
        const id = parseInt(req.params.id, 10);
        const item = items.find((i) => i.id === id);

        if (!item) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }

        res.json(item);
    } catch (error) {
        next(error);
    }
};

// Update an item
export const updateItem = (req: Request, res: Response, next: NextFunction) => {

    if (!req.params.id) return res.send("No id was provided in the updated, failed to update");

    try {
        const id = parseInt(req.params.id, 10);
        const { name } = req.body;
        const itemIndex = items.findIndex((i) => i.id === id);

        if (itemIndex === -1) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }

        if (items[itemIndex] !== undefined) {
            items[itemIndex].name = name;
            res.json(items[itemIndex]);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        next(error);
    }
};

// Delete an item
export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id) return res.send("No id was provided in the updated, failed to update");

    try {
        const id = parseInt(req.params.id, 10);
        const itemIndex = items.findIndex((i) => i.id === id);
        if (itemIndex === -1) {
        res.status(404).json({ message: 'Item not found' });
        return;
        }
        const deletedItem = items.splice(itemIndex, 1)[0];
        res.json(deletedItem);
    } catch (error) {
        next(error);
    }
};